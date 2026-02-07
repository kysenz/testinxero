/**
 * S4DLE Backend Server - v2.0
 * Tam fonksiyonel API: Leaderboard, Submit, Player sistemi
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Proxy arkasında gerçek IP almak için (nginx, cloudflare vb.)
app.set('trust proxy', true);

// IP alma helper - gerçek IP'yi al, proxy arkasında da çalışır
function getClientIp(req) {
    // Cloudflare
    const cfIp = req.headers['cf-connecting-ip'];
    if (cfIp && cfIp !== '::1') return cfIp;
    // X-Forwarded-For header'ı varsa ilk IP'yi al (gerçek client)
    const xff = req.headers['x-forwarded-for'];
    if (xff) {
        const first = xff.split(',')[0].trim();
        if (first && first !== '::1' && first !== '::ffff:127.0.0.1') return first;
    }
    // X-Real-IP (nginx)
    const xri = req.headers['x-real-ip'];
    if (xri && xri !== '::1' && xri !== '::ffff:127.0.0.1') return xri;
    // req.ip (express trust proxy)
    let ip = req.ip || req.connection?.remoteAddress || 'unknown';
    // IPv6 loopback → IPv4 olarak göster
    if (ip === '::1' || ip === '::ffff:127.0.0.1') ip = '127.0.0.1';
    // ::ffff: prefix'ini kaldır
    if (ip.startsWith('::ffff:')) ip = ip.slice(7);
    return ip;
}

// Auth log kaydı (xero.gg tarzı IP geçmişi)
function logAuth(playerId, action, req) {
    const ip = getClientIp(req);
    const ua = (req.headers['user-agent'] || '').slice(0, 300);
    const now = Math.floor(Date.now() / 1000);
    db.run(
        'INSERT INTO auth_logs (playerId, action, ip, userAgent, createdAt) VALUES (?, ?, ?, ?, ?)',
        [playerId, action, ip, ua, now]
    );
}

// ==================== MIDDLEWARE ====================

// Güvenlik headers
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
    contentSecurityPolicy: false  // CSP frontend'i bozabilir, development için kapat
}));

// CORS - Tüm originlere izin ver (development için)
app.use(cors({
    origin: true,
    credentials: true
}));

// JSON parsing
app.use(express.json({ limit: '10kb' }));

// Frontend static dosyalarını serve et (server/ klasörünün bir üstü = proje root)
const frontendPath = path.join(__dirname, 'public');
app.use(express.static(frontendPath));

// Rate limiting - API abuse önleme
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 dakika
    max: 100, // IP başına max 100 istek
    message: { success: false, error: 'Too many requests, please try again later.' },
    standardHeaders: true,
    legacyHeaders: false
});
app.use('/api/', apiLimiter);

// XSS temizleme helper
function cleanXSS(str) {
    if (!str) return '';
    return xss(String(str).trim().slice(0, 100));
}

// Türkiye saatine göre bugünün tarihini al
function getTodayTurkey() {
    const now = new Date();
    const turkeyTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));
    return turkeyTime.toISOString().split('T')[0]; // YYYY-MM-DD
}

// 4 haneli rastgele kod üret
function generateCode() {
    return String(Math.floor(1000 + Math.random() * 9000));
}

// ==================== HEALTH CHECK & SERVER TIME ====================

app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        version: '2.2',
        timestamp: new Date().toISOString(),
        todayTurkey: getTodayTurkey()
    });
});

/**
 * GET /api/time
 * Server time for daily game sync - Turkey timezone
 * Returns: today's date, server timestamp, seconds until midnight
 */
app.get('/api/time', (req, res) => {
    const now = new Date();
    const turkeyNow = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));
    const today = turkeyNow.toISOString().split('T')[0];
    
    // Gece yarısına kalan saniye
    const midnight = new Date(turkeyNow);
    midnight.setHours(24, 0, 0, 0);
    const secondsUntilMidnight = Math.floor((midnight - turkeyNow) / 1000);
    
    res.json({
        today,
        serverTimestamp: now.toISOString(),
        turkeyTime: turkeyNow.toISOString(),
        secondsUntilMidnight,
        turkeyHour: turkeyNow.getHours(),
        turkeyMinute: turkeyNow.getMinutes()
    });
});

// ==================== PLAYER ENDPOINTS ====================

/**
 * POST /api/player/register
 * Yeni oyuncu kaydı veya mevcut oyuncu kontrolü
 */
app.post('/api/player/register', (req, res) => {
    const playerId = cleanXSS(req.body.playerId);
    let nickname = cleanXSS(req.body.nickname) || 'Player';
    
    if (!playerId) {
        return res.status(400).json({ success: false, error: 'MISSING_PLAYER_ID' });
    }
    
    // Nickname normalize et
    const nicknameNorm = nickname.toLowerCase().replace(/^@+/, '').replace(/\s+/g, ' ').trim();
    
    if (nicknameNorm.length < 1 || nicknameNorm.length > 16) {
        return res.status(400).json({ success: false, error: 'INVALID_NICKNAME' });
    }
    
    const now = Math.floor(Date.now() / 1000);
    
    // Önce bu playerId zaten kayıtlı mı kontrol et
    db.get('SELECT * FROM players WHERE playerId = ?', [playerId], (err, existingPlayer) => {
        if (err) {
            console.error('DB error:', err);
            return res.status(500).json({ success: false, error: 'DB_ERROR' });
        }
        
        if (existingPlayer) {
            // Zaten kayıtlı - bilgileri döndür
            return res.json({
                success: true,
                message: 'Already registered',
                playerId: existingPlayer.playerId,
                nickname: existingPlayer.nickname,
                code: existingPlayer.code
            });
        }
        
        // Nickname başka biri tarafından kullanılıyor mu?
        db.get('SELECT * FROM players WHERE nicknameNormalized = ?', [nicknameNorm], (err, takenPlayer) => {
            if (err) {
                console.error('DB error:', err);
                return res.status(500).json({ success: false, error: 'DB_ERROR' });
            }
            
            if (takenPlayer) {
                // Nickname alınmış
                return res.status(409).json({ 
                    success: false, 
                    error: 'NICKNAME_TAKEN',
                    message: 'This nickname is already taken. Enter your code to login.'
                });
            }
            
            // Yeni kayıt oluştur
            const code = generateCode();
            const ip = getClientIp(req);
            
            db.run(
                `INSERT INTO players (playerId, nickname, nicknameNormalized, code, createdAt, lastSeenAt, registerIp, lastIp)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [playerId, nickname, nicknameNorm, code, now, now, ip, ip],
                function(err) {
                    if (err) {
                        console.error('Insert error:', err);
                        return res.status(500).json({ success: false, error: 'DB_ERROR' });
                    }
                    
                    // Auth log kaydet
                    logAuth(playerId, 'register', req);
                    
                    res.json({
                        success: true,
                        message: 'Registered successfully',
                        playerId,
                        nickname,
                        code
                    });
                }
            );
        });
    });
});

/**
 * POST /api/player/login
 * Nickname + kod ile giriş (farklı cihazdan)
 */
app.post('/api/player/login', (req, res) => {
    const nickname = cleanXSS(req.body.nickname);
    const code = cleanXSS(req.body.code);
    const newPlayerId = cleanXSS(req.body.newPlayerId);
    
    if (!nickname || !code) {
        return res.status(400).json({ success: false, error: 'MISSING_CREDENTIALS' });
    }
    
    const nicknameNorm = nickname.toLowerCase().replace(/^@+/, '').replace(/\s+/g, ' ').trim();
    
    db.get(
        'SELECT * FROM players WHERE nicknameNormalized = ? AND code = ?',
        [nicknameNorm, code],
        (err, player) => {
            if (err) {
                console.error('DB error:', err);
                return res.status(500).json({ success: false, error: 'DB_ERROR' });
            }
            
            if (!player) {
                return res.status(401).json({ success: false, error: 'INVALID_CREDENTIALS' });
            }
            
            // Giriş başarılı - lastSeenAt + IP güncelle
            const now = Math.floor(Date.now() / 1000);
            const ip = getClientIp(req);
            
            // Farklı cihazdan giriş: playerId'yi güncelle (opsiyonel)
            if (newPlayerId && newPlayerId !== player.playerId) {
                // Eski playerId'nin skorlarını yeni playerId'ye taşı
                db.run('UPDATE submissions SET playerId = ? WHERE playerId = ?', [newPlayerId, player.playerId]);
                db.run('UPDATE auth_logs SET playerId = ? WHERE playerId = ?', [newPlayerId, player.playerId]);
                db.run('UPDATE players SET playerId = ?, lastSeenAt = ?, lastIp = ? WHERE playerId = ?', [newPlayerId, now, ip, player.playerId]);
                
                logAuth(newPlayerId, 'login_transfer', req);
                
                res.json({
                    success: true,
                    message: 'Login successful',
                    playerId: newPlayerId,
                    nickname: player.nickname,
                    code: player.code
                });
            } else {
                db.run('UPDATE players SET lastSeenAt = ?, lastIp = ? WHERE playerId = ?', [now, ip, player.playerId]);
                
                logAuth(player.playerId, 'login', req);
                
                res.json({
                    success: true,
                    message: 'Login successful',
                    playerId: player.playerId,
                    nickname: player.nickname,
                    code: player.code
                });
            }
        }
    );
});

/**
 * GET /api/player/profile
 * Oyuncu profil bilgilerini getir
 */
app.get('/api/player/profile', (req, res) => {
    const playerId = cleanXSS(req.query.playerId);
    
    if (!playerId) {
        return res.status(400).json({ success: false, error: 'MISSING_PLAYER_ID' });
    }
    
    db.get('SELECT playerId, nickname, code, createdAt FROM players WHERE playerId = ?', [playerId], (err, player) => {
        if (err) {
            console.error('DB error:', err);
            return res.status(500).json({ success: false, error: 'DB_ERROR' });
        }
        
        if (!player) {
            return res.status(404).json({ success: false, error: 'NOT_FOUND' });
        }
        
        // Bugünkü skorları da getir
        const today = getTodayTurkey();
        db.all(
            'SELECT mode, attempts, won FROM submissions WHERE playerId = ? AND day = ?',
            [playerId, today],
            (err, todayScores) => {
                if (err) {
                    todayScores = [];
                }
                
                res.json({
                    success: true,
                    playerId: player.playerId,
                    nickname: player.nickname,
                    code: player.code || null,
                    createdAt: player.createdAt,
                    todayScores: todayScores || []
                });
            }
        );
    });
});

/**
 * POST /api/player/change-code
 * Mevcut kodu bilerek yeni PIN seçme
 */
app.post('/api/player/change-code', (req, res) => {
    const playerId = cleanXSS(req.body.playerId);
    const currentCode = cleanXSS(req.body.currentCode);
    const newCode = cleanXSS(req.body.newCode);

    if (!playerId || !currentCode || !newCode) {
        return res.status(400).json({ success: false, error: 'MISSING_FIELDS' });
    }

    if (!/^\d{4}$/.test(newCode)) {
        return res.status(400).json({ success: false, error: 'INVALID_NEW_CODE', message: 'Yeni kod 4 haneli sayı olmalı' });
    }

    db.get('SELECT * FROM players WHERE playerId = ?', [playerId], (err, player) => {
        if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
        if (!player) return res.status(404).json({ success: false, error: 'PLAYER_NOT_FOUND' });

        if (player.code !== currentCode) {
            return res.status(403).json({ success: false, error: 'WRONG_CODE' });
        }

        db.run('UPDATE players SET code = ? WHERE playerId = ?', [newCode, playerId], function(err) {
            if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
            res.json({ success: true, message: 'Code updated', newCode });
        });
    });
});

// ==================== SUBMIT ENDPOINT ====================

/**
 * POST /api/submit
 * Oyun sonucunu kaydet
 */
app.post('/api/submit', (req, res) => {
    const playerId = cleanXSS(req.body.playerId);
    const mode = cleanXSS(req.body.mode);
    const attempts = parseInt(req.body.attempts) || 0;
    const won = req.body.won ? 1 : 0;
    
    // Validasyon
    if (!playerId) {
        return res.status(400).json({ success: false, error: 'MISSING_PLAYER_ID' });
    }
    
    const validModes = ['classic', 'visual', 'emoji', 'audio'];
    if (!validModes.includes(mode)) {
        return res.status(400).json({ success: false, error: 'INVALID_MODE' });
    }
    
    if (attempts < 1 || attempts > 50) {
        return res.status(400).json({ success: false, error: 'INVALID_ATTEMPTS' });
    }
    
    // Oyuncu kayıtlı mı kontrol et
    db.get('SELECT nickname FROM players WHERE playerId = ?', [playerId], (err, player) => {
        if (err) {
            console.error('DB error:', err);
            return res.status(500).json({ success: false, error: 'DB_ERROR' });
        }
        
        if (!player) {
            return res.status(403).json({ success: false, error: 'NOT_REGISTERED' });
        }
        
        const today = getTodayTurkey();
        const now = Math.floor(Date.now() / 1000);
        
        // Bugün bu modu zaten oynamış mı?
        db.get(
            'SELECT id FROM submissions WHERE playerId = ? AND day = ? AND mode = ?',
            [playerId, today, mode],
            (err, existing) => {
                if (err) {
                    console.error('DB error:', err);
                    return res.status(500).json({ success: false, error: 'DB_ERROR' });
                }
                
                if (existing) {
                    return res.status(409).json({ 
                        success: false, 
                        error: 'ALREADY_PLAYED',
                        message: 'You have already played this mode today'
                    });
                }
                
                // Yeni skor kaydet
                db.run(
                    `INSERT INTO submissions (playerId, nickname, day, mode, attempts, won, createdAt)
                     VALUES (?, ?, ?, ?, ?, ?, ?)`,
                    [playerId, player.nickname, today, mode, attempts, won, now],
                    function(err) {
                        if (err) {
                            console.error('Insert error:', err);
                            return res.status(500).json({ success: false, error: 'DB_ERROR' });
                        }
                        
                        // lastSeenAt güncelle
                        db.run('UPDATE players SET lastSeenAt = ? WHERE playerId = ?', [now, playerId]);
                        
                        res.json({
                            success: true,
                            message: 'Score saved successfully',
                            id: this.lastID,
                            score: won ? Math.max(1, 7 - attempts) : 0
                        });
                    }
                );
            }
        );
    });
});

// ==================== LEADERBOARD ENDPOINTS ====================

/**
 * GET /api/leaderboard
 * Leaderboard verilerini getir
 * 
 * Query params:
 * - scope=global → Global leaderboard (tüm modların toplamı)
 * - mode=classic → Belirli mod leaderboard'u
 * - day=today veya YYYY-MM-DD
 */
app.get('/api/leaderboard', (req, res) => {
    const scope = cleanXSS(req.query.scope);
    const mode = cleanXSS(req.query.mode);
    const dayParam = cleanXSS(req.query.day) || 'today';
    
    const day = dayParam === 'today' ? getTodayTurkey() : dayParam;
    
    if (scope === 'global') {
        // Global leaderboard - tüm modların toplam skoru
        const query = `
            SELECT 
                nickname,
                SUM(CASE WHEN won = 1 THEN (CASE WHEN 7 - attempts > 1 THEN 7 - attempts ELSE 1 END) ELSE 0 END) as globalScore,
                COUNT(DISTINCT mode) as playedModesCount,
                SUM(attempts) as totalAttempts,
                MIN(createdAt) as earliestSubmit
            FROM submissions 
            WHERE day = ? AND won = 1
            GROUP BY playerId, nickname
            ORDER BY globalScore DESC, totalAttempts ASC, earliestSubmit ASC
            LIMIT 50
        `;
        
        db.all(query, [day], (err, rows) => {
            if (err) {
                console.error('DB error:', err);
                return res.status(500).json({ success: false, error: 'DB_ERROR' });
            }
            
            res.json({
                success: true,
                type: 'global',
                day,
                data: rows || []
            });
        });
        
    } else if (mode) {
        // Mode-specific leaderboard
        const validModes = ['classic', 'visual', 'emoji', 'audio'];
        if (!validModes.includes(mode)) {
            return res.status(400).json({ success: false, error: 'INVALID_MODE' });
        }
        
        const query = `
            SELECT 
                nickname,
                attempts,
                won,
                createdAt,
                (CASE WHEN won = 1 THEN (CASE WHEN 7 - attempts > 1 THEN 7 - attempts ELSE 1 END) ELSE 0 END) as score
            FROM submissions 
            WHERE day = ? AND mode = ? AND won = 1
            ORDER BY attempts ASC, createdAt ASC
            LIMIT 50
        `;
        
        db.all(query, [day, mode], (err, rows) => {
            if (err) {
                console.error('DB error:', err);
                return res.status(500).json({ success: false, error: 'DB_ERROR' });
            }
            
            res.json({
                success: true,
                type: 'mode',
                mode,
                day,
                data: rows || []
            });
        });
        
    } else {
        return res.status(400).json({ 
            success: false, 
            error: 'MISSING_PARAMS',
            message: 'Provide either scope=global or mode=<modename>'
        });
    }
});

// ==================== STATS ENDPOINT ====================

/**
 * GET /api/stats/today
 * Bugünün istatistikleri
 */
app.get('/api/stats/today', (req, res) => {
    const today = getTodayTurkey();
    
    const query = `
        SELECT 
            COUNT(DISTINCT playerId) as totalPlayers,
            COUNT(*) as totalGames,
            SUM(won) as totalWins,
            AVG(CASE WHEN won = 1 THEN attempts END) as avgAttempts
        FROM submissions 
        WHERE day = ?
    `;
    
    db.get(query, [today], (err, stats) => {
        if (err) {
            console.error('DB error:', err);
            return res.status(500).json({ success: false, error: 'DB_ERROR' });
        }
        
        res.json({
            success: true,
            day: today,
            stats: {
                totalPlayers: stats?.totalPlayers || 0,
                totalGames: stats?.totalGames || 0,
                totalWins: stats?.totalWins || 0,
                winRate: stats?.totalGames > 0 
                    ? Math.round((stats.totalWins / stats.totalGames) * 100) 
                    : 0,
                avgAttempts: stats?.avgAttempts 
                    ? Math.round(stats.avgAttempts * 10) / 10 
                    : 0
            }
        });
    });
});

// ==================== ADMIN PANEL (JWT-SECURED) ====================

const crypto = require('crypto');

// Admin credentials from environment variables
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || null;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || null;
const ADMIN_JWT_SECRET = process.env.ADMIN_JWT_SECRET || null;
const JWT_EXPIRY_SECONDS = 2 * 60 * 60; // 2 hours

// ---- Minimal JWT implementation (no external dependency) ----
function base64url(buf) {
    return Buffer.from(buf).toString('base64')
        .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function jwtSign(payload, secret, expSeconds) {
    const header = { alg: 'HS256', typ: 'JWT' };
    const now = Math.floor(Date.now() / 1000);
    const body = { ...payload, iat: now, exp: now + expSeconds };
    const segments = [
        base64url(JSON.stringify(header)),
        base64url(JSON.stringify(body))
    ];
    const sig = crypto.createHmac('sha256', secret).update(segments.join('.')).digest();
    segments.push(base64url(sig));
    return segments.join('.');
}

function jwtVerify(token, secret) {
    try {
        const parts = token.split('.');
        if (parts.length !== 3) return null;
        const sigCheck = crypto.createHmac('sha256', secret)
            .update(parts[0] + '.' + parts[1]).digest();
        const sigBuf = Buffer.from(parts[2].replace(/-/g, '+').replace(/_/g, '/'), 'base64');
        if (!crypto.timingSafeEqual(sigCheck, sigBuf)) return null;
        const payload = JSON.parse(Buffer.from(parts[1].replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString());
        if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;
        return payload;
    } catch (e) {
        return null;
    }
}

// ---- Admin auth middleware ----
function requireAdmin(req, res, next) {
    if (!ADMIN_JWT_SECRET) {
        return res.status(503).json({ success: false, error: 'ADMIN_NOT_CONFIGURED' });
    }
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
    if (!token) {
        return res.status(401).json({ success: false, error: 'NO_TOKEN' });
    }
    const payload = jwtVerify(token, ADMIN_JWT_SECRET);
    if (!payload || payload.role !== 'admin') {
        return res.status(403).json({ success: false, error: 'INVALID_TOKEN' });
    }
    req.admin = payload;
    next();
}

// Stricter rate limit for admin login (brute-force protection)
const adminLoginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { success: false, error: 'Too many login attempts. Try again later.' },
    standardHeaders: true,
    legacyHeaders: false
});

/**
 * POST /api/admin/login
 * Admin authentication - returns JWT
 */
app.post('/api/admin/login', adminLoginLimiter, (req, res) => {
    if (!ADMIN_USERNAME || !ADMIN_PASSWORD || !ADMIN_JWT_SECRET) {
        return res.status(503).json({ success: false, error: 'Admin not configured. Set ADMIN_USERNAME, ADMIN_PASSWORD, ADMIN_JWT_SECRET env vars.' });
    }

    const { username, password } = req.body || {};
    if (!username || !password) {
        return res.status(400).json({ success: false, error: 'MISSING_CREDENTIALS' });
    }

    // Constant-time comparison to prevent timing attacks
    const userMatch = username.length === ADMIN_USERNAME.length &&
        crypto.timingSafeEqual(Buffer.from(username), Buffer.from(ADMIN_USERNAME));
    const passMatch = password.length === ADMIN_PASSWORD.length &&
        crypto.timingSafeEqual(Buffer.from(password), Buffer.from(ADMIN_PASSWORD));

    if (!userMatch || !passMatch) {
        return res.status(401).json({ success: false, error: 'INVALID_CREDENTIALS' });
    }

    const token = jwtSign({ role: 'admin', user: ADMIN_USERNAME }, ADMIN_JWT_SECRET, JWT_EXPIRY_SECONDS);
    res.json({ success: true, token, expiresIn: JWT_EXPIRY_SECONDS });
});

/**
 * GET /api/admin/dashboard
 * Dashboard stats (ADMIN ONLY)
 */
app.get('/api/admin/dashboard', requireAdmin, (req, res) => {
    const today = getTodayTurkey();

    const queries = {
        totalPlayers: 'SELECT COUNT(*) as c FROM players',
        todayPlayers: `SELECT COUNT(DISTINCT playerId) as c FROM submissions WHERE day = ?`,
        totalSubmissions: 'SELECT COUNT(*) as c FROM submissions',
        todaySubmissions: `SELECT COUNT(*) as c FROM submissions WHERE day = ?`,
        todayWins: `SELECT COUNT(*) as c FROM submissions WHERE day = ? AND won = 1`
    };

    const results = {};
    const keys = Object.keys(queries);
    let done = 0;

    keys.forEach(key => {
        const needsDay = queries[key].includes('?');
        const params = needsDay ? [today] : [];
        db.get(queries[key], params, (err, row) => {
            results[key] = row?.c || 0;
            done++;
            if (done === keys.length) {
                res.json({ success: true, today, stats: results });
            }
        });
    });
});

/**
 * GET /api/admin/players
 * List all players (ADMIN ONLY)
 */
app.get('/api/admin/players', requireAdmin, (req, res) => {
    const search = cleanXSS(req.query.search) || '';
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(10, parseInt(req.query.limit) || 50));
    const offset = (page - 1) * limit;

    let whereClause = '';
    let params = [];

    if (search) {
        whereClause = 'WHERE p.nickname LIKE ? OR p.playerId LIKE ?';
        params = [`%${search}%`, `%${search}%`];
    }

    db.get(`SELECT COUNT(*) as total FROM players p ${whereClause}`, params, (err, countRow) => {
        if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });

        const total = countRow?.total || 0;

        const query = `
            SELECT 
                p.playerId, p.nickname, p.code, p.createdAt, p.lastSeenAt,
                p.registerIp, p.lastIp,
                COUNT(s.id) as totalGames,
                SUM(CASE WHEN s.won = 1 THEN 1 ELSE 0 END) as totalWins,
                GROUP_CONCAT(DISTINCT s.mode) as playedModes
            FROM players p
            LEFT JOIN submissions s ON p.playerId = s.playerId
            ${whereClause}
            GROUP BY p.playerId
            ORDER BY p.lastSeenAt DESC
            LIMIT ? OFFSET ?
        `;

        db.all(query, [...params, limit, offset], (err, rows) => {
            if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });

            res.json({
                success: true,
                total,
                page,
                pages: Math.ceil(total / limit),
                players: (rows || []).map(r => ({
                    playerId: r.playerId,
                    nickname: r.nickname,
                    code: r.code,
                    registerIp: r.registerIp || null,
                    lastIp: r.lastIp || null,
                    createdAt: r.createdAt ? new Date(r.createdAt * 1000).toISOString() : null,
                    lastSeenAt: r.lastSeenAt ? new Date(r.lastSeenAt * 1000).toISOString() : null,
                    totalGames: r.totalGames || 0,
                    totalWins: r.totalWins || 0,
                    playedModes: r.playedModes ? r.playedModes.split(',') : []
                }))
            });
        });
    });
});

/**
 * GET /api/admin/submissions
 * List submissions (ADMIN ONLY)
 */
app.get('/api/admin/submissions', requireAdmin, (req, res) => {
    const day = cleanXSS(req.query.day) || getTodayTurkey();
    const mode = cleanXSS(req.query.mode) || '';

    let whereClause = 'WHERE s.day = ?';
    let params = [day];

    if (mode) {
        whereClause += ' AND s.mode = ?';
        params.push(mode);
    }

    const query = `
        SELECT s.*, p.code
        FROM submissions s
        LEFT JOIN players p ON s.playerId = p.playerId
        ${whereClause}
        ORDER BY s.createdAt DESC
        LIMIT 200
    `;

    db.all(query, params, (err, rows) => {
        if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
        res.json({ success: true, day, data: rows || [] });
    });
});

/**
 * DELETE /api/admin/player/:playerId
 * Permanently delete a player and all their submissions (ADMIN ONLY)
 */
app.delete('/api/admin/player/:playerId', requireAdmin, (req, res) => {
    const playerId = req.params.playerId;
    if (!playerId) {
        return res.status(400).json({ success: false, error: 'MISSING_PLAYER_ID' });
    }

    db.get('SELECT nickname FROM players WHERE playerId = ?', [playerId], (err, player) => {
        if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
        if (!player) return res.status(404).json({ success: false, error: 'PLAYER_NOT_FOUND' });

        const nickname = player.nickname;

        db.run('DELETE FROM submissions WHERE playerId = ?', [playerId], function(err) {
            if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
            const deletedSubmissions = this.changes;

            db.run('DELETE FROM auth_logs WHERE playerId = ?', [playerId], function() {
            db.run('DELETE FROM players WHERE playerId = ?', [playerId], function(err) {
                if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });

                console.log(`[ADMIN] Deleted player: ${nickname} (${playerId}), ${deletedSubmissions} submissions removed`);
                res.json({
                    success: true,
                    message: `Player "${nickname}" and ${deletedSubmissions} submissions deleted.`,
                    deletedSubmissions
                });
            });
            });
        });
    });
});

/**
 * PATCH /api/admin/player/:playerId
 * Edit player fields - nickname, code, or both (ADMIN ONLY)
 */
app.patch('/api/admin/player/:playerId', requireAdmin, (req, res) => {
    const playerId = req.params.playerId;
    const newNickname = req.body.nickname !== undefined ? cleanXSS(req.body.nickname) : null;
    const newCode = req.body.code !== undefined ? cleanXSS(req.body.code) : null;

    if (!playerId) return res.status(400).json({ success: false, error: 'MISSING_PLAYER_ID' });

    db.get('SELECT * FROM players WHERE playerId = ?', [playerId], (err, player) => {
        if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
        if (!player) return res.status(404).json({ success: false, error: 'PLAYER_NOT_FOUND' });

        const updates = [];
        const params = [];

        if (newNickname && newNickname.length >= 1 && newNickname.length <= 16) {
            const norm = newNickname.toLowerCase().replace(/^@+/, '').replace(/\s+/g, ' ').trim();
            updates.push('nickname = ?', 'nicknameNormalized = ?');
            params.push(newNickname, norm);
            // Also update submissions nickname
            db.run('UPDATE submissions SET nickname = ? WHERE playerId = ?', [newNickname, playerId]);
        }

        if (newCode && /^\d{4}$/.test(newCode)) {
            updates.push('code = ?');
            params.push(newCode);
        }

        if (updates.length === 0) {
            return res.status(400).json({ success: false, error: 'NOTHING_TO_UPDATE' });
        }

        params.push(playerId);
        db.run(`UPDATE players SET ${updates.join(', ')} WHERE playerId = ?`, params, function(err) {
            if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
            console.log(`[ADMIN] Edited player ${playerId}: ${updates.join(', ')}`);
            res.json({ success: true, message: 'Player updated' });
        });
    });
});

/**
 * POST /api/admin/players/bulk-delete
 * Delete multiple players at once (ADMIN ONLY)
 */
app.post('/api/admin/players/bulk-delete', requireAdmin, (req, res) => {
    const playerIds = req.body.playerIds;
    if (!Array.isArray(playerIds) || playerIds.length === 0) {
        return res.status(400).json({ success: false, error: 'MISSING_PLAYER_IDS' });
    }

    const placeholders = playerIds.map(() => '?').join(',');
    
    db.run(`DELETE FROM submissions WHERE playerId IN (${placeholders})`, playerIds, function(err) {
        if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
        const deletedSubs = this.changes;

        db.run(`DELETE FROM auth_logs WHERE playerId IN (${placeholders})`, playerIds, function() {
        db.run(`DELETE FROM players WHERE playerId IN (${placeholders})`, playerIds, function(err) {
            if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
            const deletedPlayers = this.changes;
            console.log(`[ADMIN] Bulk deleted ${deletedPlayers} players, ${deletedSubs} submissions`);
            res.json({ success: true, deletedPlayers, deletedSubmissions: deletedSubs });
        });
        });
    });
});

/**
 * DELETE /api/admin/players/all
 * NUKE - Delete ALL players and submissions (ADMIN ONLY)
 */
app.delete('/api/admin/players/all', requireAdmin, (req, res) => {
    const confirm = req.body.confirm;
    if (confirm !== 'DELETE_ALL') {
        return res.status(400).json({ success: false, error: 'CONFIRMATION_REQUIRED', message: 'Send confirm: "DELETE_ALL"' });
    }

    db.run('DELETE FROM submissions', function(err) {
        if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
        const subs = this.changes;
        db.run('DELETE FROM auth_logs', function() {
        db.run('DELETE FROM players', function(err) {
            if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
            const players = this.changes;
            console.log(`[ADMIN] ⚠️ NUKE: Deleted ALL ${players} players, ${subs} submissions`);
            res.json({ success: true, deletedPlayers: players, deletedSubmissions: subs });
        });
        });
    });
});

/**
 * POST /api/admin/player/:playerId/reset-scores
 * Reset all scores for a player but keep account (ADMIN ONLY)
 */
app.post('/api/admin/player/:playerId/reset-scores', requireAdmin, (req, res) => {
    const playerId = req.params.playerId;
    db.run('DELETE FROM submissions WHERE playerId = ?', [playerId], function(err) {
        if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
        console.log(`[ADMIN] Reset scores for ${playerId}: ${this.changes} submissions deleted`);
        res.json({ success: true, deletedSubmissions: this.changes });
    });
});

/**
 * GET /api/admin/export/players
 * Export all players as JSON (ADMIN ONLY)
 */
app.get('/api/admin/export/players', requireAdmin, (req, res) => {
    db.all(`
        SELECT p.*, COUNT(s.id) as totalGames, SUM(CASE WHEN s.won=1 THEN 1 ELSE 0 END) as totalWins
        FROM players p LEFT JOIN submissions s ON p.playerId = s.playerId
        GROUP BY p.playerId ORDER BY p.createdAt DESC
    `, (err, rows) => {
        if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
        res.json({ success: true, count: rows.length, players: rows });
    });
});

/**
 * GET /api/admin/export/submissions
 * Export all submissions as JSON (ADMIN ONLY)
 */
app.get('/api/admin/export/submissions', requireAdmin, (req, res) => {
    db.all('SELECT * FROM submissions ORDER BY createdAt DESC', (err, rows) => {
        if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
        res.json({ success: true, count: rows.length, submissions: rows });
    });
});

/**
 * GET /api/admin/player/:playerId/history
 * Full submission history for a player (ADMIN ONLY)
 */
app.get('/api/admin/player/:playerId/history', requireAdmin, (req, res) => {
    const playerId = req.params.playerId;
    db.all(
        'SELECT * FROM submissions WHERE playerId = ? ORDER BY createdAt DESC',
        [playerId],
        (err, rows) => {
            if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
            res.json({ success: true, playerId, submissions: rows || [] });
        }
    );
});

/**
 * GET /api/admin/player/:playerId/auth-logs
 * Full auth/IP log history for a player (xero.gg style) (ADMIN ONLY)
 */
app.get('/api/admin/player/:playerId/auth-logs', requireAdmin, (req, res) => {
    const playerId = req.params.playerId;
    const page = parseInt(req.query.page) || 1;
    const limit = Math.min(parseInt(req.query.limit) || 20, 100);
    const offset = (page - 1) * limit;

    db.get('SELECT COUNT(*) as total FROM auth_logs WHERE playerId = ?', [playerId], (err, countRow) => {
        if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
        const total = countRow ? countRow.total : 0;

        db.all(
            'SELECT * FROM auth_logs WHERE playerId = ? ORDER BY createdAt DESC LIMIT ? OFFSET ?',
            [playerId, limit, offset],
            (err, rows) => {
                if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
                res.json({
                    success: true,
                    playerId,
                    total,
                    page,
                    pages: Math.ceil(total / limit),
                    logs: (rows || []).map(r => ({
                        id: r.id,
                        action: r.action,
                        ip: r.ip,
                        userAgent: r.userAgent,
                        createdAt: r.createdAt
                    }))
                });
            }
        );
    });
});

/**
 * GET /api/admin/player/:playerId/detail
 * Full player detail with stats (ADMIN ONLY)
 */
app.get('/api/admin/player/:playerId/detail', requireAdmin, (req, res) => {
    const playerId = req.params.playerId;

    db.get('SELECT * FROM players WHERE playerId = ?', [playerId], (err, player) => {
        if (err) return res.status(500).json({ success: false, error: 'DB_ERROR' });
        if (!player) return res.status(404).json({ success: false, error: 'NOT_FOUND' });

        // Submission stats
        db.all('SELECT mode, COUNT(*) as games, SUM(won) as wins FROM submissions WHERE playerId = ? GROUP BY mode', [playerId], (err, modeStats) => {
            // Unique IPs
            db.all('SELECT DISTINCT ip FROM auth_logs WHERE playerId = ?', [playerId], (err, ips) => {
                // Total logins
                db.get('SELECT COUNT(*) as total FROM auth_logs WHERE playerId = ?', [playerId], (err, logCount) => {
                    res.json({
                        success: true,
                        player: {
                            playerId: player.playerId,
                            nickname: player.nickname,
                            code: player.code,
                            registerIp: player.registerIp,
                            lastIp: player.lastIp,
                            createdAt: player.createdAt,
                            lastSeenAt: player.lastSeenAt,
                        },
                        modeStats: modeStats || [],
                        uniqueIps: (ips || []).map(r => r.ip),
                        totalLogins: logCount ? logCount.total : 0
                    });
                });
            });
        });
    });
});

/**
 * GET /admin
 * Serve the admin panel HTML (login-gated on client, API-gated on server)
 */
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});

// ==================== ERROR HANDLING ====================

// 404 handler - API rotaları için JSON, diğerleri için index.html
app.use((req, res) => {
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({ success: false, error: 'NOT_FOUND', path: req.path });
    }
    // Frontend route - index.html serve et
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ success: false, error: 'INTERNAL_ERROR' });
});

// ==================== START SERVER ====================

app.listen(PORT, () => {
    const adminOk = ADMIN_USERNAME && ADMIN_PASSWORD && ADMIN_JWT_SECRET;
    console.log(`
╔════════════════════════════════════════════╗
║     🎮 S4DLE Backend Server v2.2 🎮        ║
╠════════════════════════════════════════════╣
║  Status: RUNNING                           ║
║  Port: ${PORT}                                 ║
║  Game:  http://localhost:${PORT}                ║
║  API:   http://localhost:${PORT}/api            ║
║  Admin: http://localhost:${PORT}/admin          ║
║  Admin Auth: ${adminOk ? '✅ CONFIGURED' : '❌ NOT SET (set env vars)'}             ║
║                                            ║
║  Env vars needed for admin:                ║
║    ADMIN_USERNAME                           ║
║    ADMIN_PASSWORD                           ║
║    ADMIN_JWT_SECRET                         ║
╚════════════════════════════════════════════╝
    `);
});

module.exports = app;
