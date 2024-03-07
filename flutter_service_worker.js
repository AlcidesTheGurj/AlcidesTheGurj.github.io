'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "39f88aa6fa538695991e9583c3406a09",
"assets/AssetManifest.bin.json": "f51bfbdab50e313951891cee180b4693",
"assets/AssetManifest.json": "3b3fb3566ed78407a0cefbd6a3e4a973",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "851d24371fe27229e5b52ddcac824178",
"assets/images/0.png": "b1bfdd74982d8aaf73f9429375f74db5",
"assets/images/1.png": "44837fffa96fad290688184f46a0b158",
"assets/images/10.png": "6de25e4d7b47bef3ce5019967e43883e",
"assets/images/11.png": "02438e52467b2b68fdb749baffdc0536",
"assets/images/12.png": "40af7279e35d6c57d27685eba28522dc",
"assets/images/13.png": "fcff8458c91617eec5d82c2642576be8",
"assets/images/14.png": "7fdd04d75365e5d6ced2b3f82a94fc80",
"assets/images/15.png": "08cc1db9c13040bf6fc6cd846c06d232",
"assets/images/16.png": "8b78f586fe7c94374d35a60d328b8f3a",
"assets/images/17.png": "60e9a78b873e3b75fb3574142d8ea184",
"assets/images/2.png": "ddbe0c212815dd0f8d9f18e4423604bc",
"assets/images/3.png": "dc305492961e0f05f4011df51d1f4c0e",
"assets/images/4.png": "f1dd6e4da5cafc793fcc4ebf6032274d",
"assets/images/5.png": "25f8b2d4296cdc1ce9b9d60a1c244963",
"assets/images/6.png": "fbc77d61fe5761cb85bae45474dfeefb",
"assets/images/7.png": "21f0c75f6a338f15ba6ba808ca85202f",
"assets/images/8.png": "85280969b264d6f937b6e708788b5169",
"assets/images/9.png": "c88119c4578fb8f0235d6db371c4954f",
"assets/images/appstore.png": "455abc00ceb416d1ae1e93641a5345b8",
"assets/images/default/0-web.png": "a5de5f5bab8f611e1dc88fa1e69e35b2",
"assets/images/default/0.jpg": "f8faefcad9ee294e984e49dd97c06061",
"assets/images/default/1-web.png": "06ab3f40db60c9a580b6d32e31eb74e8",
"assets/images/default/1.jpg": "06306b16eb0d01f6a6ecdeca8e8acef1",
"assets/images/default/10-web.png": "0006095026ec44bf65dfa1437f03d8e9",
"assets/images/default/10.jpg": "8f45cdff5f98e04b904ceadd14ee7dfe",
"assets/images/default/11-web.png": "01343bf0ef2156949b9b4bada5bf9829",
"assets/images/default/11.jpg": "2163dae724eaeafee44521af493b2451",
"assets/images/default/12-web.png": "8b5de4182e777b15e984e8f34f1f161a",
"assets/images/default/12.jpg": "ca3771331d8cde8510d29b94f70ba2dc",
"assets/images/default/13-web.png": "1c637bd183e9b7183062e8eab61a4f0b",
"assets/images/default/13.jpg": "ce7cc52bb497cee7a55980e50a9622ec",
"assets/images/default/14-web.png": "cac49adc8b513969335ff3863d5d00ba",
"assets/images/default/14.jpg": "5cd0c0a0dc850e087a8b77c561e884a2",
"assets/images/default/15-web.png": "49be380b76f519441b1a578424fa76c4",
"assets/images/default/15.jpg": "3d7142798623ade8bcfadadd944dafe4",
"assets/images/default/16-web.png": "fa21c62fcbe9f904ba172771b401d632",
"assets/images/default/16.jpg": "c78178cd1f787245e2fedec01a2e1bcf",
"assets/images/default/2-web.png": "1cebfd419d31f5cac833d235d526d651",
"assets/images/default/2.jpg": "9a4338432c496cdc3890c8a07bd6c519",
"assets/images/default/3-web.png": "d9c14540d19ebea9b79fcc80f6911fc5",
"assets/images/default/3.jpg": "ae9d7f48ce3f962f13c821740d427b6b",
"assets/images/default/4-web.png": "9da33cf448d08c5c835bd5cfb697f8cd",
"assets/images/default/4.jpg": "eb5b2b88f81e9bfc223da3786f7fb630",
"assets/images/default/5-web.png": "553fdba9674d94a00be7ca1c46c02620",
"assets/images/default/5.jpg": "e79ef3ebe9407dc081e4756c5a9111dd",
"assets/images/default/6-web.png": "73ac8800291fbfe6d2f34a7a22a3030e",
"assets/images/default/6.jpg": "5187120e66e71578511de98577925a77",
"assets/images/default/7-web.png": "6d678190abf4b92daa16a7d01ad7884c",
"assets/images/default/7.jpg": "3fbc225317e8fd465db4a28835a70e54",
"assets/images/default/8-web.png": "b2788404ef0eee1c4b48fa4d96a5ddab",
"assets/images/default/8.jpg": "dc78ff315251da595371f386a11dfbf9",
"assets/images/default/9-web.png": "25b8202fc063223edb1fefb02ab4ea65",
"assets/images/default/9.jpg": "3eff400565d6c7d725b81714eedad56b",
"assets/images/google-dark.png": "c93f9b31b2a3fd1ed73187f55226e15f",
"assets/images/google-square-light.png": "9773d89d9315e26a9beb160a70b9a6fa",
"assets/images/google-square-small.png": "8199f4be8fb22e083997fd0ad2e1192c",
"assets/images/google-square.png": "a16fb9d764e176d11f47a8222cf47e82",
"assets/images/googleLogo.png": "7e557f1c0864829c54c300d15bee69f4",
"assets/images/Google__G__logo.svg.png": "027ef96727eb922bfe79136c3f6d7be6",
"assets/images/input.pdf": "28ba27b113622366ae72924be3f947bd",
"assets/images/logo-app.png": "583c88e3d89cddc00cbbc7ac47a18a78",
"assets/images/logo-certificate.jpg": "e538c7ee27fbde7df94624ab677c985a",
"assets/images/logo-certificate.png": "c1eb352b523e067dd78b4b5a48d7dfad",
"assets/images/logo.png": "5fb59311907d866743d4ad56602b4aa3",
"assets/images/logo_transparent%2520-%2520Copy.jpg": "c277b2008462e0650efd3f0584b730bd",
"assets/images/logo_transparent.png": "023b127f5adc49f6a59ab8733b41cc18",
"assets/images/playstore.png": "84f6dd637c7a0d2d90273a2188060256",
"assets/images/SDG%2520Wheel_PRINT.jpg": "2305dcba51cc0c4247203749acab3f72",
"assets/images/SDG%2520Wheel_PRINT_Transparent.png": "60e9a78b873e3b75fb3574142d8ea184",
"assets/images/signin-assets.zip": "7604bbea4125809493c5c376e51bc8f5",
"assets/NOTICES": "1765497e6999e717fa9450605edc66e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttermoji/attributeicons/accessories.svg": "0b8839e003a89232edec0e09cb12fa2b",
"assets/packages/fluttermoji/attributeicons/beard.svg": "908ac523ce1c704be65e254aa4a04e31",
"assets/packages/fluttermoji/attributeicons/beardcolor.svg": "8fa1ec767cfa14371ca15a47126049ba",
"assets/packages/fluttermoji/attributeicons/eyebrow.svg": "cf66096dacdfb6af807cd745fc724e9a",
"assets/packages/fluttermoji/attributeicons/eyes.svg": "cfbbbeb9cc3b40c6a561166ad07fc56c",
"assets/packages/fluttermoji/attributeicons/hair.svg": "0044380b1c40c321c8a65da5b8e77a0c",
"assets/packages/fluttermoji/attributeicons/haircolor.svg": "5756eb4c957d15ea7fcc37c1835488ac",
"assets/packages/fluttermoji/attributeicons/mouth.svg": "af3193d2a407e09fa1156f0f3c30ea86",
"assets/packages/fluttermoji/attributeicons/outfit.svg": "f36789fda25e7b3746835daf0ec7c0dc",
"assets/packages/fluttermoji/attributeicons/outfitcolor.svg": "e8f931206db9c6ab01a6b4c22c23bf4d",
"assets/packages/fluttermoji/attributeicons/skin.svg": "5f58e197768b8da582fbe8219daf164d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cd5a2be811cc887efedfd358050fc525",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0e751781eb4fd34042ab1c4ebd848637",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "76769104ee965059719ad1093c77cc39",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4dffe88cf08af011bfddb98a6e8aae5c",
"/": "4dffe88cf08af011bfddb98a6e8aae5c",
"main.dart.js": "0e2a8d313e5418e5914b01342826e599",
"manifest.json": "3e4e8fecf55f289e33e0ac8446b064de",
"version.json": "77fed46d941fa7837c12087709b3a4be"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
