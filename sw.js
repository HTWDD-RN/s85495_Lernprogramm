self.addEventListener("install", e => {
    console.log("Install");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./beleg.css", "./image/icon2.png"]);
        })
    );
});

self.addEventListener("fetch", e => {
    console.log(`Intercepting fetch req for: ${e.request.url}`);
});
