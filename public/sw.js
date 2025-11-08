// Simple service worker for caching static assets
const CACHE_NAME = 'travel-janakpur-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/index-*.js',
  '/assets/index-*.css',
  '/assets/vendor-*.js',
  '/assets/ui-*.js',
  '/assets/utils-*.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});