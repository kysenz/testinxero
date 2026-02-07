const CACHE_NAME = 's4dle-v3-kysen';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/script.js',
  './js/data.js',
  './assets/sounds/click.mp3',
  './assets/sounds/click-tr.mp3',
  './assets/sounds/success-tr.mp3',
  './assets/sounds/succes-tr.mp3',
  './assets/sounds/error-tr.mp3',
  './assets/icons/icon-192.png',
  // CDN Linklerini de cache'liyoruz ki internet yokken görsel efektler çalışsın
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600;700&display=swap',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'
];

// 1. Yükleme (Install)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[S4DLE SW] Dosyalar önbelleğe alınıyor...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. Aktifleştirme (Activate) - Eski sürümleri temizle
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[S4DLE SW] Eski cache siliniyor:', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

// 3. İstek Yakalama (Fetch) - Offline Stratejisi
self.addEventListener('fetch', (event) => {
  // API istekleri (leaderboard vb.) için Network First (İnternet yoksa hata dön)
  if (event.request.url.includes('/api/')) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response(JSON.stringify({ error: "Offline modu: İnternet bağlantısı yok." }), {
            headers: { 'Content-Type': 'application/json' }
        });
      })
    );
    return;
  }

  // Statik dosyalar (HTML, CSS, JS, Resimler) için Cache First
  // Önce cache'e bak, yoksa internetten çek ve cache'e ekle (Stale-while-revalidate benzeri)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Cache'de varsa hemen döndür
      if (cachedResponse) {
        return cachedResponse;
      }
      // Yoksa internetten çek
      return fetch(event.request).then((networkResponse) => {
        // Geçerli bir cevap mı kontrol et
        if(!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        // Cevabı cache'e kopyala
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      });
    })
  );
});