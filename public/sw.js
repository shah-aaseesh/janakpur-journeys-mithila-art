// Service Worker for Travel Janakpur
// Version 3 - Minimal caching, forces fresh content
const CACHE_NAME = 'travel-janakpur-v3';

// Install - skip waiting to activate immediately
self.addEventListener('install', (event) => {
  // Clear ALL caches on install
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.map((name) => caches.delete(name)));
    }).then(() => self.skipWaiting())
  );
});

// Activate - take control of all clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.map((name) => caches.delete(name)));
    }).then(() => self.clients.claim())
      .then(() => {
        // Force reload all open tabs
        self.clients.matchAll({ type: 'window' }).then((clients) => {
          clients.forEach((client) => client.navigate(client.url));
        });
      })
  );
});

// Fetch - Always network first, no caching
self.addEventListener('fetch', (event) => {
  // Always fetch from network, no caching
  if (event.request.method === 'GET') {
    event.respondWith(
      fetch(event.request).catch(() => {
        // Only fallback to cache for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
        return new Response('Offline', { status: 503 });
      })
    );
  }
});
