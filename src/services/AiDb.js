// import { openDB } from "idb";

// // const { openDB } = require("idb");

// const dbName = "aiduIDB";
// let dbPromise = null;
// // const [store, key] = null;

// //Gatsby SSR membutuhkan bypass
// if (typeof window !== "undefined"){
//     dbPromise = openDB(dbName, 3, {
//         upgrade(db){
//             db.createObjectStore("tokennn");
//             db.createObjectStore("soalll");
//             db.createObjectStore("siswa");
//         },
//     });
// }


// const aiDb = {
//     async get(store, key){
//       return (await dbPromise).get(store, key);
//     },
//     async set(key, val){
//       return (await dbPromise)('tokennn', val, key);
//     },
//     async delete(store, key){
//         return (await dbPromise)(store, key);
//     },
//     async clear(store){
//         return (await dbPromise).clear(store);
//     },
//     async keys(store){
//         return (await dbPromise).getAllKeys(store);
//     },
//     async getAll(store){
//         return (await dbPromise).getAll(store);
//     },
//     async count(store){
//         return (await dbPromise).count(store);
//     }
// };


// export default aiDb;


import { openDB } from 'idb';


// const [store, key] = {};
const dbPromise = openDB('aiduIDB', 2, {
  upgrade(db) {
    db.createObjectStore('tokennn');
    db.createObjectStore('bio', {keyPath: 'nama'});
  },
});

const aiDb = {
  async get(key) {
    return (await dbPromise).get('tokennn', key);
  },
  async set(key, val) {
    return (await dbPromise).put('tokennn', val, key);
  },
  async getBio(key) {
    return (await dbPromise).get('bio', key);
  },
  async setBio(key, val) {
    return (await dbPromise).put('bio', val, key);
  },
  async delete(key) {
    return (await dbPromise).delete('keyval', key);
  },
  async clear() {
    return (await dbPromise).clear('keyval');
  },
  async keys() {
    return (await dbPromise).getAllKeys('keyval');
  },
};

export default aiDb;