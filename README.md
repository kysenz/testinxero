# 🎮 S4DLE - Daily S4 League Challenge

S4 League temalı günlük tahmin oyunu. Wordle tarzında her gün yeni bir meydan okuma!

## 🚀 Hızlı Başlangıç

### Backend Kurulumu

```bash
cd server
npm install
npm start
```

Server başlayınca şunu göreceksiniz:
```
╔════════════════════════════════════════════╗
║     🎮 S4DLE Backend Server v2.0 🎮        ║
╠════════════════════════════════════════════╣
║  Status: RUNNING                           ║
║  Port: 3000                                ║
║  URL: http://localhost:3000                ║
╚════════════════════════════════════════════╝
```

### Frontend
`index.html` dosyasını tarayıcıda açın veya bir web server kullanın:

```bash
# Python ile
python -m http.server 8080

# Node.js ile
npx serve .

# VS Code Live Server ile
# index.html'e sağ tık → "Open with Live Server"
```

---

## 🎯 Oyun Modları

| Mod | Açıklama | Durum |
|-----|----------|-------|
| 🎯 **Klasik** | İstatistiklere bakarak item tahmin et | ✅ Aktif |
| 👁️ **Görsel** | Bulanık görsellerden item/harita tanı | ✅ Aktif |
| 🧩 **Emoji** | Emoji ipuçlarından item tahmin et | ✅ Aktif |
| 🔊 **Ses** | Ses efektlerinden item tahmin et | ⏳ Yakında |

---

## 📊 Skor Sistemi

```javascript
// Her mod için puan (sadece kazanılanlar):
modeScore = 7 - attempts  // Max 6 puan (1 denemede), Min 1 puan (6 denemede)

// Oyuncunun günlük global skoru:
globalScore = SUM(tüm oynanan modların skorları)
```

### Sıralama Kriterleri
1. En yüksek skor (globalScore DESC)
2. En az toplam deneme (totalAttempts ASC)
3. En erken tamamlama (earliestSubmit ASC)

---

## 🔌 API Endpoints

### Health Check
```http
GET /api/health
```

### Oyuncu İşlemleri
```http
# Kayıt
POST /api/player/register
Body: { "playerId": "uuid", "nickname": "Kysen" }

# Giriş (farklı cihazdan)
POST /api/player/login
Body: { "nickname": "Kysen", "code": "1234", "newPlayerId": "uuid" }

# Profil
GET /api/player/profile?playerId=uuid
```

### Skor Gönderme
```http
POST /api/submit
Body: {
    "playerId": "uuid",
    "mode": "classic",
    "attempts": 3,
    "won": true
}
```

### Leaderboard
```http
# Global (tüm modların toplamı)
GET /api/leaderboard?scope=global&day=today

# Mod bazlı
GET /api/leaderboard?mode=classic&day=today

# Belirli bir gün
GET /api/leaderboard?mode=visual&day=2025-12-17
```

### Günlük İstatistikler
```http
GET /api/stats/today
```

---

## 🌐 Desteklenen Diller

- 🇹🇷 Türkçe (varsayılan)
- 🇺🇸 English
- 🇩🇪 Deutsch
- 🇪🇸 Español
- 🇸🇦 العربية (RTL destekli)

---

## 📁 Proje Yapısı

```
S4XeroLoldle/
├── assets/
│   ├── icons/          # PWA ikonları
│   ├── img/
│   │   ├── items/      # 45 silah/eşya görseli
│   │   └── maps/       # 35 harita görseli
│   └── sounds/         # Ses efektleri
├── css/
│   └── style.css       # Ana stil dosyası
├── js/
│   ├── data.js         # Item ve harita verileri
│   └── script.js       # Oyun mantığı (1880+ satır)
├── server/
│   ├── database.js     # SQLite yapılandırması
│   ├── server.js       # Express.js API
│   ├── package.json    # Backend bağımlılıkları
│   └── s4dle.db        # SQLite veritabanı
├── index.html          # Ana sayfa
├── manifest.json       # PWA manifest
└── service-worker.js   # Offline destek
```

---

## 🔒 Güvenlik Özellikleri

- ✅ **Helmet** - Güvenlik HTTP headers
- ✅ **Rate Limiting** - API abuse koruması (100 istek/15 dk)
- ✅ **XSS Protection** - Input temizleme
- ✅ **CORS** - Cross-origin yapılandırması
- ✅ **UNIQUE Constraint** - Aynı gün aynı mod sadece 1 kez

---

## 💡 Kademeli İpuçları (Progressive Hints)

Klasik modda yanlış tahminlere göre ipuçları açılır:

| Yanlış Tahmin | Açılan İpucu |
|---------------|--------------|
| 2+ | 🔤 İlk harf |
| 4+ | 🔢 Harf sayısı |
| 6+ | 🧩 Harf maskesi (A _ _ _ E) |
| 8+ | 🔀 Karıştırılmış harfler |

---

## 🛠️ Geliştirme

### Yeni Item Ekleme
`js/data.js` dosyasına ekleyin:
```javascript
{
    name: "New Item",
    type: "Rifle",      // Rifle, Melee, Heavy, Sniper, Install, Skill
    range: "Mid",       // Close, Mid, Long, Very Long, Auto, Area, -
    sp: false,          // SP item mi?
    year: 2024,         // Çıkış yılı (null olabilir)
    emojis: ["🔫","💥","🎯","⚡"],
    imageUrl: "assets/img/items/new-item.png"
}
```

### Yeni Harita Ekleme
```javascript
{
    name: "New Map",
    type: "Map",
    range: "-",
    sp: false,
    year: null,
    imageUrl: "assets/img/maps/new-map.png"
}
```

---

## 📈 Versiyon Geçmişi

### v2.0.0 (17 Aralık 2025)
- ✅ Tam fonksiyonel backend API
- ✅ Leaderboard sistemi (Global + Mod bazlı)
- ✅ Oyuncu kayıt/giriş sistemi
- ✅ Güvenlik middleware'ları aktif
- ✅ 5 dil desteği tamamlandı
- ✅ Kademeli ipuçları sistemi
- ✅ Progressive Web App (PWA) desteği

### v1.0.0
- İlk sürüm (UI prototipi)

---

## 👨‍💻 Geliştirici

**Kysen** - [xero.gg/player/Kysen](https://xero.gg/player/Kysen)

S4 Xero Community için yapılmıştır ❤️

---

## 📄 Lisans

ISC License
