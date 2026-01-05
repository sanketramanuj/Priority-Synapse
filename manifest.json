const CACHE_NAME = 'brain-v1';
const ASSETS = ['./index.html', './manifest.json'];

// Install & Cache
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

// Stay active
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
