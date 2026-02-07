
/**
 * S4DLE Database Configuration - v2.0
 * SQLite veritabanı yapılandırması
 */

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 's4dle.db');
const db = new sqlite3.Database(dbPath);

// Kolon ekleme helper fonksiyonu
function ensureColumn(table, column, def) {
    return new Promise((resolve, reject) => {
        db.all(`PRAGMA table_info(${table})`, (err, rows) => {
            if (err) return reject(err);
            if (rows.some(r => r.name === column)) return resolve();
            db.run(`ALTER TABLE ${table} ADD COLUMN ${column} ${def}`, err2 => {
                if (err2) reject(err2);
                else resolve();
            });
        });
    });
}

// Index oluşturma helper fonksiyonu
function ensureIndex(name, table, columns) {
    return new Promise((resolve, reject) => {
        db.run(`CREATE INDEX IF NOT EXISTS ${name} ON ${table}(${columns})`, err => {
            if (err) reject(err);
            else resolve();
        });
    });
}

// Veritabanı başlatma
async function initDatabase() {
    return new Promise((resolve, reject) => {
        db.serialize(async () => {
            try {
// Migration: eski DB'de players tablosu "id" kolonuyla geldiyse "playerId"e dönüştür
async function migratePlayersIdToPlayerId() {
    return new Promise((resolve, reject) => {
        db.all(`PRAGMA table_info(players)`, (err, rows) => {
            if (err) return reject(err);

            const cols = rows.map(r => r.name);
            const hasPlayersTable = rows && rows.length > 0;

            // players tablosu yoksa veya zaten playerId varsa çık
            if (!hasPlayersTable || cols.includes('playerId')) return resolve();

            // Eski şema: id / player_id -> playerId
            const legacyIdCol = cols.includes('id') ? 'id' : (cols.includes('player_id') ? 'player_id' : null);
            if (!legacyIdCol) return resolve();

            db.serialize(() => {
                db.run(`CREATE TABLE IF NOT EXISTS players_new (
                    playerId TEXT PRIMARY KEY,
                    nickname TEXT NOT NULL DEFAULT 'Player',
                    nicknameNormalized TEXT,
                    code TEXT,
                    createdAt INTEGER,
                    lastSeenAt INTEGER
                )`);

                // Mevcut verileri kopyala (id -> playerId)
                db.run(
                    `INSERT OR IGNORE INTO players_new (playerId, nickname, nicknameNormalized, code, createdAt, lastSeenAt)
                     SELECT ${legacyIdCol}, nickname, nicknameNormalized, code, createdAt, lastSeenAt FROM players`,
                    (err2) => {
                        if (err2) return reject(err2);

                        db.run(`DROP TABLE players`, (err3) => {
                            if (err3) return reject(err3);

                            db.run(`ALTER TABLE players_new RENAME TO players`, (err4) => {
                                if (err4) return reject(err4);
                                resolve();
                            });
                        });
                    }
                );
            });
        });
    });
}

                await migratePlayersIdToPlayerId();

                // Players tablosu
                db.run(`CREATE TABLE IF NOT EXISTS players (
                    playerId TEXT PRIMARY KEY,
                    nickname TEXT NOT NULL DEFAULT 'Player',
                    nicknameNormalized TEXT,
                    code TEXT,
                    createdAt INTEGER,
                    lastSeenAt INTEGER
                )`);

                // Submissions tablosu
                db.run(`CREATE TABLE IF NOT EXISTS submissions (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    playerId TEXT NOT NULL,
                    nickname TEXT NOT NULL DEFAULT 'Player',
                    day TEXT NOT NULL,
                    mode TEXT NOT NULL,
                    attempts INTEGER NOT NULL,
                    won INTEGER NOT NULL DEFAULT 0,
                    createdAt INTEGER NOT NULL,
                    UNIQUE(playerId, day, mode)
                )`);

                // Auth logs - her giriş/kayıt IP kaydı (xero.gg tarzı)
                db.run(`CREATE TABLE IF NOT EXISTS auth_logs (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    playerId TEXT NOT NULL,
                    action TEXT NOT NULL,
                    ip TEXT,
                    userAgent TEXT,
                    createdAt INTEGER NOT NULL
                )`);

                // Eksik kolonları ekle (migration)
                await ensureColumn('players', 'nicknameNormalized', 'TEXT');
                await ensureColumn('players', 'lastSeenAt', 'INTEGER');
                await ensureColumn('players', 'code', 'TEXT');
                await ensureColumn('players', 'registerIp', 'TEXT');
                await ensureColumn('players', 'lastIp', 'TEXT');
                await ensureColumn('submissions', 'nickname', 'TEXT DEFAULT "Player"');

                // Indexler
                await ensureIndex('idx_submissions_day_mode', 'submissions', 'day, mode');
                await ensureIndex('idx_submissions_day_won', 'submissions', 'day, won');
                await ensureIndex('idx_submissions_player_day', 'submissions', 'playerId, day');
                await ensureIndex('idx_players_nickname', 'players', 'nicknameNormalized');
                await ensureIndex('idx_auth_logs_player', 'auth_logs', 'playerId');
                await ensureIndex('idx_auth_logs_ip', 'auth_logs', 'ip');

                // Mevcut verileri güncelle
                db.run(`UPDATE players SET 
                    nicknameNormalized = lower(trim(nickname)),
                    lastSeenAt = COALESCE(lastSeenAt, strftime('%s','now'))
                    WHERE nicknameNormalized IS NULL`);

                console.log('✅ Database initialized successfully');
                resolve();
            } catch (err) {
                console.error('❌ Database initialization error:', err);
                reject(err);
            }
        });
    });
}

// Veritabanını başlat
initDatabase().catch(err => {
    console.error('Failed to initialize database:', err);
});

module.exports = db;
