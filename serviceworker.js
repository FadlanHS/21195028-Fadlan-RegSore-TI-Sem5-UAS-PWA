const cacheName = 'uas_1';
const urlsToCache = [
	'/',
	'/index.html',
	'/about.html',
	'/indexeddb.html',
	'/css/bootstrap.min.css',
	'/css/style.css',
	'/img/apple-touch-icon.png',
	'/img/bg-hero.png',
	'/img/favicon.ico',
	'/img/icon_144.png',
	'/img/icon_192.png',
	'/img/icon_196.png',
	'/img/icon_512.png',
	'/img/icon_maskable.png',
	'/img/logo.png',
	'/img/logo2.png',
	'/js/main.js',
	'/manifest.json'
];

//########################################
//delete old cache
self.addEventListener('activate', function(event) {
	//console.log('SW activate');
	event.waitUntil(
		caches.keys().then(function(keys) {
			return Promise.all(keys.map(function(key) {
				if (key !== cacheName) {
					//console.log('Delete cache: ', key);
					return caches.delete(key);
				}
			}));
		}).then(function() {
			//console.log('SW claim', cacheName);
			return self.clients.claim();
		})
	);
});

//########################################
//setup the cache
self.addEventListener('install', function(event) {
	//console.log('SW install');
	event.waitUntil(
		caches.open(cacheName).then(function(cache) {
			//console.log('Open cache');
			return cache.addAll(urlsToCache);
		}).then(function() {
			//console.log('Skip waiting');
			return self.skipWaiting();
		})
	);
});

//########################################
//fetch the cache
self.addEventListener('fetch', function(event) {
    //console.log('SW fetch: ', event.request.url);
	event.respondWith(
		caches.match(event.request).then(function(pResponse) {
			if (pResponse) {
				//console.log('Load from cache: ', event.request.url);
				return pResponse;
			} else {
				//console.log('Load from network: ', event.request.url);
				return fetch(event.request);
			}
		})
	);
});

