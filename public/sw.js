
const CACHE_NAME = 'locksmith-cache-v4'; // Incrementing version to force cache purge
const STATIC_CACHE_NAME = 'locksmith-static-v4';
const IMAGE_CACHE_NAME = 'locksmith-images-v4';

// Assets to cache immediately on service worker install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/placeholder.svg'
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache first, fallback to network
  cacheFirst: async (request) => {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) return cachedResponse;
    
    try {
      const networkResponse = await fetch(request);
      
      // Only cache valid responses
      if (networkResponse && networkResponse.status === 200) {
        const cache = await caches.open(getCacheNameForRequest(request));
        cache.put(request, networkResponse.clone());
      }
      
      return networkResponse;
    } catch (error) {
      // Network error - we have no cached response and the network failed
      console.log('Fetch failed:', error);
      return new Response('Network error', { status: 408, headers: { 'Content-Type': 'text/plain' } });
    }
  },
  
  // Network first, fallback to cache
  networkFirst: async (request) => {
    try {
      const networkResponse = await fetch(request);
      
      // Only cache valid responses
      if (networkResponse && networkResponse.status === 200) {
        const cache = await caches.open(getCacheNameForRequest(request));
        cache.put(request, networkResponse.clone());
      }
      
      return networkResponse;
    } catch (error) {
      const cachedResponse = await caches.match(request);
      return cachedResponse || new Response('Network error', { status: 408, headers: { 'Content-Type': 'text/plain' } });
    }
  }
};

// Determine which cache to use based on request URL
const getCacheNameForRequest = (request) => {
  const url = new URL(request.url);
  
  // Cache images separately with longer expiration
  if (
    url.pathname.match(/\.(jpe?g|png|gif|svg|webp)$/i) || 
    url.hostname.includes('supabase.co') ||
    url.hostname.includes('unsplash.com')
  ) {
    return IMAGE_CACHE_NAME;
  }
  
  return STATIC_CACHE_NAME;
};

// Select appropriate caching strategy based on request
const getStrategyForRequest = (request) => {
  const url = new URL(request.url);
  
  // Use cache-first for static assets and images
  if (
    url.pathname.match(/\.(css|js|jpe?g|png|gif|svg|webp|ico|woff2?)$/i) ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com')
  ) {
    return CACHE_STRATEGIES.cacheFirst;
  }
  
  // Use network-first for HTML and API requests
  return CACHE_STRATEGIES.networkFirst;
};

// Install event - precache key assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting()) // Immediately activate the new service worker
  );
});

// Fetch event - apply appropriate caching strategy
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip non-HTTP(S) requests
  if (!event.request.url.startsWith('http')) return;
  
  // Skip Google Analytics and other tracking requests
  const url = new URL(event.request.url);
  if (
    url.hostname.includes('google-analytics.com') ||
    url.hostname.includes('googletagmanager.com') ||
    url.hostname.includes('clarity.ms')
  ) {
    return;
  }
  
  event.respondWith(getStrategyForRequest(event.request)(event.request));
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (
            cacheName !== STATIC_CACHE_NAME && 
            cacheName !== IMAGE_CACHE_NAME && 
            cacheName !== CACHE_NAME
          ) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      // Ensure the new service worker takes control immediately
      self.clients.claim();
      console.log('New service worker activated');
    })
  );
});

// Periodically clean up older cached items from the image cache
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAR_OLD_CACHES') {
    event.waitUntil(
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        cache.keys().then((keys) => {
          // If we have more than 100 images, remove the oldest ones
          if (keys.length > 100) {
            // Sort by date (assuming newer requests are at the end)
            return Promise.all(keys.slice(0, keys.length - 100).map(key => cache.delete(key)));
          }
        });
      })
    );
  }
});
