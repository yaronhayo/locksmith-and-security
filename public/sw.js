
const CACHE_NAME = 'locksmith-cache-v4'; // Incrementing version to force cache purge
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Add other static assets here
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
  // Immediately activate the new service worker
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Special handling for JavaScript module scripts
  if (event.request.url.endsWith('.js') && event.request.destination === 'script') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Default handling for other resources
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  // Clear old caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Ensure the new service worker takes control immediately
  self.clients.claim();
});
