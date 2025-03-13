
const CACHE_NAME = 'locksmith-cache-v6'; // Increment version
const STATIC_CACHE_NAME = 'locksmith-static-v6';
const IMAGE_CACHE_NAME = 'locksmith-images-v6';
const FONT_CACHE_NAME = 'locksmith-fonts-v6';
const API_CACHE_NAME = 'locksmith-api-v6';

// Critical assets to cache immediately
const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/vendor-*.js',
  '/assets/ui-*.js',
  '/assets/index-*.js',
  '/assets/index-*.css',
  'https://mtbgayqzjrxjjmsjikcg.supabase.co/storage/v1/object/public/uploads//Locksmithandsecuritylogo.jpg',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&display=swap'
];

// Get cache name based on request type
const getCacheNameForRequest = (request) => {
  const url = new URL(request.url);
  
  // Cache fonts separately with longer expiration
  if (
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com') ||
    url.pathname.match(/\.(woff2?|ttf|otf|eot)$/i)
  ) {
    return FONT_CACHE_NAME;
  }
  
  // Cache images separately
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

// Cache strategies
const strategies = {
  // Cache first, fallback to network
  cacheFirst: async (request) => {
    const cache = await caches.open(getCacheNameForRequest(request));
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    try {
      const networkResponse = await fetch(request);
      // Cache valid responses
      if (networkResponse.status === 200) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    } catch (error) {
      console.error('Fetch failed:', error);
      return new Response('Network error', { 
        status: 408, 
        headers: { 'Content-Type': 'text/plain' } 
      });
    }
  },
  
  // Network first, fallback to cache
  networkFirst: async (request) => {
    try {
      const networkResponse = await fetch(request);
      // Cache valid responses
      if (networkResponse.status === 200) {
        const cache = await caches.open(getCacheNameForRequest(request));
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    } catch (error) {
      const cache = await caches.open(getCacheNameForRequest(request));
      const cachedResponse = await cache.match(request);
      
      if (cachedResponse) {
        return cachedResponse;
      }
      
      return new Response('Network error', { 
        status: 408, 
        headers: { 'Content-Type': 'text/plain' } 
      });
    }
  },
  
  // Stale-while-revalidate
  staleWhileRevalidate: async (request) => {
    const cache = await caches.open(getCacheNameForRequest(request));
    const cachedResponse = await cache.match(request);
    
    // Clone the request for the network fetch
    const networkPromise = fetch(request).then(networkResponse => {
      // Update the cache with the new response
      if (networkResponse.status === 200) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    }).catch(error => {
      console.error('Fetch failed:', error);
      // If both cache and network fail, return an error response
      if (!cachedResponse) {
        return new Response('Network error', { 
          status: 408, 
          headers: { 'Content-Type': 'text/plain' } 
        });
      }
    });
    
    return cachedResponse || networkPromise;
  }
};

// Choose strategy based on request type
const getStrategy = (request) => {
  const url = new URL(request.url);
  
  // Use cache-first for static assets, fonts
  if (
    url.pathname.match(/\.(css|js|woff2?|ttf|otf|eot|svg|ico)$/i) ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com')
  ) {
    return strategies.cacheFirst;
  }
  
  // Use stale-while-revalidate for images
  if (
    url.pathname.match(/\.(jpe?g|png|gif|webp|avif)$/i) ||
    url.hostname.includes('supabase.co')
  ) {
    return strategies.staleWhileRevalidate;
  }
  
  // Use network-first for HTML and API requests
  return strategies.networkFirst;
};

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all(
      CRITICAL_ASSETS.map(asset => {
        return caches.open(STATIC_CACHE_NAME).then(cache => {
          // Use cache.add instead of fetch + cache.put to handle redirects
          return cache.add(asset).catch(error => {
            console.warn(`Failed to cache ${asset}:`, error);
          });
        });
      })
    ).then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Delete any cache that doesn't match our current cache names
          if (
            cacheName !== STATIC_CACHE_NAME &&
            cacheName !== IMAGE_CACHE_NAME &&
            cacheName !== FONT_CACHE_NAME &&
            cacheName !== API_CACHE_NAME
          ) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - apply caching strategy
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and non-HTTP/HTTPS requests
  if (
    event.request.method !== 'GET' || 
    !event.request.url.startsWith('http')
  ) {
    return;
  }
  
  // Skip analytics requests
  const url = new URL(event.request.url);
  if (
    url.hostname.includes('google-analytics.com') ||
    url.hostname.includes('googletagmanager.com') ||
    url.hostname.includes('clarity.ms')
  ) {
    return;
  }
  
  event.respondWith(getStrategy(event.request)(event.request));
});

// Background sync for failed form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'form-submission') {
    event.waitUntil(
      self.registration.storage.get('pendingFormSubmissions')
        .then(pendingSubmissions => {
          if (!pendingSubmissions || !pendingSubmissions.length) {
            return;
          }
          
          return Promise.all(
            pendingSubmissions.map(submission => {
              return fetch(submission.url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submission.data)
              }).then(response => {
                if (response.ok) {
                  // Remove from pending list
                  const newPendingList = pendingSubmissions
                    .filter(s => s.id !== submission.id);
                  
                  return self.registration.storage.set(
                    'pendingFormSubmissions', 
                    newPendingList
                  );
                }
              });
            })
          );
        })
    );
  }
});

// Periodically clean up older cached items
const cleanupCaches = async () => {
  const now = Date.now();
  const oneDayAgo = now - (24 * 60 * 60 * 1000);
  
  // Clean up API cache - items older than 1 day
  const apiCache = await caches.open(API_CACHE_NAME);
  const apiRequests = await apiCache.keys();
  
  for (const request of apiRequests) {
    const response = await apiCache.match(request);
    if (response) {
      const dateHeader = response.headers.get('date');
      if (dateHeader && new Date(dateHeader).getTime() < oneDayAgo) {
        await apiCache.delete(request);
      }
    }
  }
  
  // Limit image cache to 100 items
  const imageCache = await caches.open(IMAGE_CACHE_NAME);
  const imageRequests = await imageCache.keys();
  
  if (imageRequests.length > 100) {
    // Sort by access time if available, otherwise just take the first ones
    // This is a simplification - ideally would track last accessed time
    for (let i = 0; i < imageRequests.length - 100; i++) {
      await imageCache.delete(imageRequests[i]);
    }
  }
};

// Run cleanup every 12 hours
setInterval(cleanupCaches, 12 * 60 * 60 * 1000);
