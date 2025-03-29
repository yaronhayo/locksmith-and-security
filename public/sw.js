
const CACHE_NAME = 'locksmith-cache-v5'; // Incrementing version to force cache purge
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Add other static assets here
];

// Set correct Content-Type headers for JavaScript modules
const jsHeaders = new Headers({
  'Content-Type': 'application/javascript'
});

const cssHeaders = new Headers({
  'Content-Type': 'text/css'
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
  // Immediately activate the new service worker
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Special handling for JavaScript module scripts
  if (event.request.url.endsWith('.js') && event.request.destination === 'script') {
    event.respondWith(
      fetch(event.request, { 
        headers: jsHeaders 
      })
      .catch(() => {
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            // Create a new response with proper headers
            return new Response(cachedResponse.body, {
              status: 200,
              headers: jsHeaders
            });
          }
          return cachedResponse;
        });
      })
    );
    return;
  }
  
  // Special handling for CSS files
  if (event.request.url.endsWith('.css')) {
    event.respondWith(
      fetch(event.request, { 
        headers: cssHeaders 
      })
      .catch(() => {
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            // Create a new response with proper headers
            return new Response(cachedResponse.body, {
              status: 200,
              headers: cssHeaders
            });
          }
          return cachedResponse;
        });
      })
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
    }).then(() => {
      // Ensure the new service worker takes control immediately
      return self.clients.claim();
    })
  );
});

// Add error handling for module loading
self.addEventListener('error', (event) => {
  console.error('Service worker error:', event.message);
  if (event.message && event.message.includes('Failed to load module script')) {
    console.error('Module loading error detected in service worker');
  }
});
