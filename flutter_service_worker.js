'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dc994673598adc94d8e31737cb06929f",
"version.json": "361d9774af7757b05db26f18fcd10fb6",
"index.html": "4e3ea1df033dbbd2ade95ddcf8d9c9c0",
"/": "4e3ea1df033dbbd2ade95ddcf8d9c9c0",
"ads.text": "0f83087bfc3f191eedd426b9fbf0c02b",
"main.dart.js": "e2dc0d9e08bed3d7cd2d0540ceb5a77e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"ads.html": "a156f05efa225c6682aca4ca3971fd8a",
"favicon.png": "aee5fe337f23d9abd90f992034badb63",
"icons/Icon-192.png": "adeb3f5f29b4101a3c5cf50dda864dc8",
"icons/Icon-maskable-192.png": "adeb3f5f29b4101a3c5cf50dda864dc8",
"icons/Icon-maskable-512.png": "b72609723c7e606f8a1d20239af6c875",
"icons/Icon-512.png": "b72609723c7e606f8a1d20239af6c875",
"manifest.json": "a93fc1aa42d53ff31f9c07b6a2849918",
"assets/AssetManifest.json": "ce105f534d9266bb1483f9b30c8d29c1",
"assets/NOTICES": "f8db721564cb54162680a825da4fc7fc",
"assets/FontManifest.json": "0fc1f7099ac0bcfe03d593b82015b949",
"assets/AssetManifest.bin.json": "6e420e2b7fba6fb7378940f639030d2c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e7cf2320b3093c372d0c8c334e24e427",
"assets/fonts/MaterialIcons-Regular.otf": "6812ddb6f23d6203ffced7b2f51c13bd",
"assets/assets/images/icon.png": "06fa1057334e6c4ed2d955e54c0d95e3",
"assets/assets/images/advertise.jpg": "2257bbf7e999cbb871df0e8222a378e2",
"assets/assets/images/wiriser.jpg": "3e4b6de3cd6edb5b2c406907c9251c58",
"assets/assets/images/about-us-background.png": "8af72400bb4388fe45cc596674dedbda",
"assets/assets/images/footer.png": "64f21546eb9f092d5c1cc0ee2cf5c2b5",
"assets/assets/images/web.png": "dc10084c4e4150795ceb6ccaf512f49b",
"assets/assets/images/4.png": "1b943d724cb2d7c49f888f750ce3a479",
"assets/assets/images/no_results.png": "2c0849c3840e240ecafe29c7ed38a500",
"assets/assets/images/5.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/7.png": "ef6224b4bed5dab9e095f61f8b79e1d0",
"assets/assets/images/about.png": "82412a77944f5d7597705d094e820f36",
"assets/assets/images/6.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/images/2.png": "4e3841840f01296a18ce2e022ec708e3",
"assets/assets/images/3.png": "f9ffe7a2f9b99179d795c5713ea35956",
"assets/assets/images/1.png": "7532c8c2e441eb4c3749e09c694c946d",
"assets/assets/svgs/search.svg": "b1f5f4be0bb8efa166412fc6a937667e",
"assets/assets/svgs/user.svg": "cc39741de0ca9bc776647a6d51983e1c",
"assets/assets/svgs/wiriser.svg": "9124736fa2edbab88667f925c6af8aa6",
"assets/assets/svgs/no_trans.svg": "6419d3d49d2310f94df517615247305e",
"assets/assets/svgs/linkedln.svg": "9ead944df6f22f5fa7ab081f7df4492d",
"assets/assets/svgs/check.svg": "0d9e4f2d411a38660ebdbfed1af3c458",
"assets/assets/svgs/mic.svg": "5660550668f28d032d99aa09a252d939",
"assets/assets/svgs/front.svg": "8b22315406b87fe9179447bad79127d0",
"assets/assets/svgs/1.svg": "46030411f4baeb4b13eb5765bb3a0013",
"assets/assets/svgs/3.svg": "008f79b4e81b72e7a7a6ab1bc5065555",
"assets/assets/svgs/back.svg": "a9b4969fde0d03390b414c9e479f298b",
"assets/assets/svgs/2.svg": "02d7e0bb01dcf007d8352d9eff6e8250",
"assets/assets/svgs/about-us.svg": "9c8c512959ab179e116962b80e22c561",
"assets/assets/svgs/youtube.svg": "2c436239f2204e49b91f72649862a954",
"assets/assets/svgs/logo.svg": "6031c11ad1aeb691c14d86b6e925b4a1",
"assets/assets/svgs/menu.svg": "b11d4a2a85c52d2c370ca85c035c473d",
"assets/assets/fonts/Nunito-Medium.ttf": "d26cecc95cdc8327b337357e6c5c1f5b",
"assets/assets/fonts/Nunito-ExtraBold.ttf": "5b5a206f5cd32fa496c93925d0caf609",
"assets/assets/fonts/Nunito-Light.ttf": "7de99c591b88e33ceda578f9ee140263",
"assets/assets/fonts/Nunito-Regular.ttf": "b83ce9c59c73ade26bb7871143fd76bb",
"assets/assets/fonts/Nunito-SemiBold.ttf": "38257ec36f55676f98fcdf1264adb69d",
"assets/assets/fonts/Nunito-Bold.ttf": "ba43cdecf9625c0dcec567ba29555e15",
"assets/assets/fonts/Nunito-ExtraLight.ttf": "ef7ff1b92707646c2e02a39067aab385",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
