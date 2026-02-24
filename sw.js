const CACHE_NAME = 'teamflow-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/app',
  '/manifest.json',
  '/icon-512.png',
  '/logo-horizontal.png'
];

// Installation du Service Worker et mise en cache des fichiers essentiels
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('TeamFlow: Mise en cache des fichiers...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('TeamFlow: Nettoyage ancien cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Stratégie : Réseau d'abord, sinon Cache (pour avoir toujours les derniers scores)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
