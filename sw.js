const CONTENT_NAME = "tarefas";
const CONTENT_ASSETS = [
    '/18-08-PAMM/icons/icon-666.png',
    '/18-08-PAMM/icons/icon-777.png',
    '/18-08-PAMM/index.html',
    '/18-08-PAMM/manifest.json',
    '/18-08-PAMM/style.css',
    '/18-08-PAMM/script.js',
    '/18-08-PAMM/sw.js',
]

self.addEventListener("install", (event) => {
caches.open("tarefas").then((cache) =>{
    console.log ("cacheAberto")
    cache.addAll(CONTENT_ASSETS);
})
})


self.addEventListener("fetch", (event) =>{
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    )
} )