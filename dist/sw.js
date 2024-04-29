const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {
    event.waitUntil(
      addResourcesToCache([
        "/",
        "/index.html",
        "/assets/index-qE4NpTUm.js",
        "/assets/index-CXlQ_1Pk.css",
        "images/icons/icon-72x72.png",
        "images/icons/icon-128x128.png",
        "images/icons/icon-144x144.png",
        "images/icons/icon-152x152.png",
        "images/icons/icon-192x192.png",
        "images/icons/icon-384x384.png",
        "images/icons/icon-512x512.png",
      ]),
    );
  });
  const putInCache = async (request, response) => {
    const cache = await caches.open("v1");
    await cache.put(request, response);
  };
  
  const cacheFirst = async (request) => {
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
      return responseFromCache;
    }
    const responseFromNetwork = await fetch(request);
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  };
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(cacheFirst(event.request));
  });
  
  