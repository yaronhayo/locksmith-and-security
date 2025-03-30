
const CACHE_NAME = 'locksmith-cache-v6'; // Incrementing version to force cache purge
const STATIC_CACHE_NAME = 'locksmith-static-v6';
const IMAGE_CACHE_NAME = 'locksmith-images-v6';
const FONT_CACHE_NAME = 'locksmith-fonts-v6';
const API_CACHE_NAME = 'locksmith-api-v6';

// Assets to cache immediately on service worker install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/placeholder.svg'
];

// Critical assets to cache with high priority
const CRITICAL_ASSETS = [
  '/assets/vendor-*.js',
  '/assets/ui-*.js',
  'https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Locksmithandsecuritylogo.jpg',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&display=swap'
];

// External domains that should be excluded from service worker interception
const BYPASS_DOMAINS = [
  'cloudflareinsights.com',
  'static.cloudflareinsights.com',
  'www.google.com',
  'www.gstatic.com',
  'maps.googleapis.com',
  'maps.gstatic.com'
];

// Check if URL is from a domain that should bypass service worker
const shouldBypass = (url) => {
  const urlObj = new URL(url);
  return BYPASS_DOMAINS.some(domain => urlObj.hostname.includes(domain));
};

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
  },
  
  // Stale-while-revalidate strategy
  staleWhileRevalidate: async (request) => {
    const cache = await caches.open(getCacheNameForRequest(request));
    
    // Try to get the resource from the cache
    const cachedResponse = await cache.match(request);
    
    // Clone the request for the network fetch
    const fetchPromise = fetch(request)
      .then(networkResponse => {
        // Update the cache with the new response
        if (networkResponse && networkResponse.status === 200) {
          cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      })
      .catch(error => {
        console.log('Fetch failed:', error);
        // If both cache and network fail, return an error response
        if (!cachedResponse) {
          return new Response('Network error', { status: 408, headers: { 'Content-Type': 'text/plain' } });
        }
      });
    
    return cachedResponse || fetchPromise;
  }
};

// Determine which cache to use based on request URL
const getCacheNameForRequest = (request) => {
  const url = new URL(request.url);
  
  // Cache fonts separately
  if (
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com') ||
    url.pathname.match(/\.(woff2?|ttf|otf|eot)$/i)
  ) {
    return FONT_CACHE_NAME;
  }
  
  // Cache images separately with longer expiration
  if (
    url.pathname.match(/\.(jpe?g|png|gif|svg|webp|avif)$/i) || 
    url.hostname.includes('supabase.co') ||
    url.hostname.includes('unsplash.com')
  ) {
    return IMAGE_CACHE_NAME;
  }
  
  // Cache API responses separately
  if (
    url.pathname.includes('/api/') ||
    url.hostname.includes('api.')
  ) {
    return API_CACHE_NAME;
  }
  
  return STATIC_CACHE_NAME;
};

// Select appropriate caching strategy based on request
const getStrategyForRequest = (request) => {
  const url = new URL(request.url);
  
  // Use cache-first for static assets, fonts and most images
  if (
    url.pathname.match(/\.(css|js|woff2?|ttf|otf|eot|svg|ico)$/i) ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com')
  ) {
    return CACHE_STRATEGIES.cacheFirst;
  }
  
  // Use stale-while-revalidate for most images
  if (
    url.pathname.match(/\.(jpe?g|png|gif|webp|avif)$/i) ||
    url.hostname.includes('supabase.co') ||
    url.hostname.includes('unsplash.com')
  ) {
    return CACHE_STRATEGIES.staleWhileRevalidate;
  }
  
  // Use network-first for HTML and API requests
  return CACHE_STRATEGIES.networkFirst;
};

// Install event - precache key assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      // Cache regular static assets
      caches.open(STATIC_CACHE_NAME)
        .then((cache) => cache.addAll(PRECACHE_ASSETS)),
      
      // Cache critical assets with high priority
      caches.open(STATIC_CACHE_NAME)
        .then((cache) => cache.addAll(CRITICAL_ASSETS))
    ])
    .then(() => self.skipWaiting()) // Immediately activate the new service worker
  );
});

// Fetch event - apply appropriate caching strategy or bypass for certain domains
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip non-HTTP(S) requests
  if (!event.request.url.startsWith('http')) return;
  
  // Bypass service worker for specific domains (Cloudflare, Google, etc.)
  if (shouldBypass(event.request.url)) {
    return;
  }
  
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
            cacheName !== FONT_CACHE_NAME &&
            cacheName !== API_CACHE_NAME &&
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

// Periodically clean up older cached items
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAR_OLD_CACHES') {
    event.waitUntil(
      Promise.all([
        // Clean up image cache
        caches.open(IMAGE_CACHE_NAME).then((cache) => {
          cache.keys().then((keys) => {
            // If we have more than 100 images, remove the oldest ones
            if (keys.length > 100) {
              // Sort by date (assuming newer requests are at the end)
              return Promise.all(keys.slice(0, keys.length - 100).map(key => cache.delete(key)));
            }
          });
        }),
        
        // Clean up API cache after 1 day
        caches.open(API_CACHE_NAME).then((cache) => {
          cache.keys().then((keys) => {
            const now = Date.now();
            const oneDayAgo = now - (24 * 60 * 60 * 1000);
            
            return Promise.all(
              keys.map(key => {
                return caches.match(key).then(response => {
                  if (response) {
                    const headers = response.headers;
                    const date = headers.get('date');
                    if (date && new Date(date).getTime() < oneDayAgo) {
                      return cache.delete(key);
                    }
                  }
                });
              })
            );
          });
        })
      ])
    );
  }
});

// Trigger periodic cache cleanup
setInterval(() => {
  self.dispatchEvent(new MessageEvent('message', {
    data: { type: 'CLEAR_OLD_CACHES' }
  }));
}, 24 * 60 * 60 * 1000); // Every 24 hours
