import 'regenerator-runtime';

import CacheHelper from './utils/cache-helper-native';
// Daftar asset yang akan dicaching
const assetsToCache = [
	'./',
	'./icons/maskable_icon.png',
	'./icons/maskable_icon_x48.png',
	'./icons/maskable_icon_x72.png',
	'./icons/maskable_icon_x96.png',
	'./icons/maskable_icon_x128.png',
	'./icons/maskable_icon_x144.png',
	'./icons/maskable_icon_x192.png',
	'./icons/maskable_icon_x384.png',
	'./icons/maskable_icon_x512.png',
	'./index.html',
	'./favicon.png',
	'./app.bundle.js',
	'./app.webmanifest',
	'./sw.bundle.js',
];

self.addEventListener('install', (event) => {
	// console.log('Installing Service Worker ...');
	// TODO: Caching App Shell Resource
	event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
	// console.log('Activating Service Worker ...');
	// TODO: Delete old caches
	event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
	// console.log(event.request);
	// event.respondWith(fetch(event.request));
	// TODO:
	event.respondWith(CacheHelper.revalidateCache(event.request));
});
