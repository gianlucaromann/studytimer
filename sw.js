/* Studytimer: macht die App offline nutzbar. Bei jeder Änderung an der App VERSION erhöhen. */
const VERSION = 'studytimer-v2';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/favicon.svg', './icons/favicon-32.png',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png',
  './wecker/', './wecker/manifest.webmanifest', './wecker/icons/icon.svg', './wecker/icons/favicon-32.png',
  './wecker/icons/icon-192.png', './wecker/icons/icon-512.png', './wecker/icons/apple-touch-icon.png'];
/* Jede Seite hat ihren eigenen Offline-Eintrag: Studytimer (index.html) und Filmwecker (wecker/) */
const pageKey = (url) => /\/wecker(\/|\/index\.html)?$/.test(url.pathname) ? './wecker/' : './index.html';

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  /* Seite selbst: zuerst aus dem Netz (damit Updates sofort ankommen), offline aus dem Speicher */
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(pageKey(url), copy)); }
      return res;
    }).catch(() => caches.match(pageKey(url))));
    return;
  }
  /* Icons, Manifest und Schriften: sofort aus dem Speicher, im Hintergrund auffrischen */
  if (url.origin === self.location.origin || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.match(req).then((hit) => {
      const net = fetch(req).then((res) => {
        if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
        return res;
      }).catch(() => hit);
      return hit || net;
    }));
  }
});
