const CACHE_NAME = "neon-recorder-v1";
const ASSETS = ["./", "./index.html", "./manifest.json"];

// 1. Install & Cache Files
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

// 2. Serve from Cache (Offline Mode)
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
