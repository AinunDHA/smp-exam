
// import { openDB } from 'idb';
// var staticCacheName = 'aidu-static-v9';
// var cacheeeee = 'soalll';

// self.addEventListener('install', function(event){
//     event.waitUntil(
//       caches.open(staticCacheName).then(function(cache){
//         return cache.addAll([
          
//             '/index.html',
//             '/src/components/buttonbio/buttonbio.js',
//             '/src/components/buttonbio/buttonbio.css',
//             '/src/components/buttontoken/buttontoken.js',
//             '/src/components/buttontoken/buttontoken.css',
//             '/src/components/ButtonUjian/ButtonUjian.js',
//             '/src/components/ButtonUjian/ButtonUjian.css',
//             '/src/components/DaftarSoal/DaftarSoal.js',
//             '/src/components/DaftarSoal/DaftarSoal.css',
//             '/src/components/footer/footer.js',
//             '/src/components/footer/footer.css',
//             '/src/components/header/header.js',
//             '/src/components/header/header.css',
//             '/src/components/HeaderUjian/HeaderUjian.js',
//             '/src/components/HeaderUjian/HeaderUjian.css',
//             '/src/components/Isian_biodata/isian_biodata.js',
//             '/src/components/Isian_biodata/isian_biodata.css',
//             '/src/components/isian_token/isian_token.js',
//             '/src/components/isian_token/isian_token.css',
//             '/src/components/layout/layout.js',
//             '/src/components/layout/layout.css',
//             '/src/components/NomorSoal/NomorSoal.js',
//             '/src/components/NomorSoal/NomorSoal.css',
//             '/src/components/RulesBox/rulesbox.js',
//             '/src/components/RulesBox/rulesbox.css',
//             '/src/components/RulesButton/rulesbutton.js',
//             '/src/components/RulesButton/rulesbutton.css',
//             '/src/components/Sidebar/sidebar.js',
//             '/src/components/Sidebar/sidebar.css',
//             '/src/components/Soal/Soal.js',
//             '/src/components/Soal/Soal.css',
//             '/src/image.js',
//             '/src/seo.js',
//             '/src/pages/index.js',
//             '/src/pages/404.js',
//             '/src/pages/login/bio.js',
//             '/src/pages/login/bio.css',
//             '/src/pages/login/rules.js',
//             '/src/pages/ujian/lamanujian.js',
//             '/src/pages/ujian/lamanujian.css',
//             '/src/pages/ujian/lamanhasil.js',
//             '/src/pages/ujian/lamanhasil.css',
//             '/src/pages/ujian/lamanakhir.js',
//             '/src/pages/ujian/lamanakhir.css'
//         ]);  
//       })  
//     );
// });

// //Coba Active event
// self.addEventListener('activate', e => {
//   console.log('Service worker: Activate!!!');
//   //removed unwanted cache
//   e.waitUntil(
//     caches.keys().then(staticCacheNames => {
//       return Promise.all(
//         staticCacheNames.map(cache => {
//           if(cache !== staticCacheName){
//             console.log('sw: clearing old cache');
//             return caches.delete(cache); 
//           }
//         })
//       )
//     })
//   );

// });

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js"
)

// The plugin will pass the files to cache here
workbox.precaching.precacheAndRoute([])



//Coba fetching event
self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("/http://localhost:3000/soal/")) {
    // response to API requests, Cache Update Refresh strategy
    event.respondWith(caches.match(event.request));
    //TODO: update et refresh
  }-
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );

});

var idb = indexedDB.open('aidu', 1);
idb.onupgradeneeded = function () {
  var db = idb.result;
  db.createObjectStore('soalll', {
    keyPath: 'id',
    autoIncrement: true
  });
};
idb.onsuccess = function succes() {
  var db = idb.result;
  var tx = db.transaction('soalll', 'readwrite');
  var store = tx.objectStore('soalll');
  // store.put('foo', 'bar');
  function json(response) {
    return response.json();
  }

  fetch('http://localhost:3000/soal')
    .then(json)
    .then(function (data) {
      console.log('ooooo', data);

      var request = db.transaction(["soalll"], "readwrite").objectStore("soalll").add(data[0]);
      request.onsuccess = function (event) {
        console.log("saved.");
      };
      request.onerror = function (event) {
        console.log("error.");
      };

      //----------------HERE NEED TO STORE IN DB -----you try I come back in 2 hrs
      // console.log('Request succeeded with JSON response', data);
    }).catch(function (error) {
      console.log('Request failed', error);
    });
}

//Untuk coba menampilkan data

  var db = idb.result;
  var tx = db.transaction(["soalll"], "readonly").objectStore("soalll");
  var getSoalData = tx.getAll();
  getSoalData.onsuccess = function (event){
    console.log("ini datanya", event);
  };
  // var dapat = tx.objectStore('soalll');
  // dapat.getAll();


//----------------------------------------------------------


// async function demo() {
//   const db = await openDB('aidu', 1, {
//     upgrade(db) {
//       // db.createObjectStore('cobaaa');

//       db.createObjectStore('soaalleee', {
//         keyPath: 'id',
//       });
//     },
//   });

//   // This works
//   const tx = db.transaction('soaalleee', 'readwrite');
//   const soalStore = tx.objectStore('soaalleee');

//   await soalStore.put({
//     id: 1,
//     name: Aisyah,
//     age: 13
//   });
//   await tx.done;
// }



// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request)
//     .then(function (response) {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });





  
//KENDALA: tidak bisa aktif SW nya kalo ada import dependencies
//Alhamdulillah teratasi 14 Jun
