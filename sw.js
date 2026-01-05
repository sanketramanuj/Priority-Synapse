const CACHE_NAME = 'brain-v1';

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
});

// This allows the Service Worker to show a notification even if the app is 'frozen'
self.addEventListener('message', (event) => {
    if (event.data.type === 'TRIGGER_NUDGE') {
        self.registration.showNotification(event.data.title, {
            body: event.data.body,
            icon: 'https://via.placeholder.com/128/4ade80/000000?text=B',
            tag: 'task-alert',
            renotify: true,
            requireInteraction: true // Keeps it on the lock screen longer
        });
    }
});
