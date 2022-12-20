import 'regenerator-runtime';

import CacheHelper from './utils/cache-helper-native';
// Daftar asset yang akan dicaching
const assetsToCache = [
	'./',
	'./icons/android/android-launchericon-144-144.png',
	'./icons/android/android-launchericon-192-192.png',
	'./icons/android/android-launchericon-48-48.png',
	'./icons/android/android-launchericon-512-512.png',
	'./icons/android/android-launchericon-72-72.png',
	'./icons/android/android-launchericon-96-96.png',
	'./icons/favicon.png',
	'./index.html',
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
