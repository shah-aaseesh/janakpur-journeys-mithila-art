// Service Worker for Travel Janakpur
const CACHE_NAME = 'travel-janakpur-v2';
const RUNTIME_CACHE = 'runtime-cache';

// Resources to pre-cache
const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/hero-image-optimized.webp',
  '/favicon-32x32.png',
];

// Install event - pre-cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Pre-caching resources');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
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