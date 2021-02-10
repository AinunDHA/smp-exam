import {openDB} from "idb";
// const dbVersion = 1;

const Db = () => {
    const dbName = "aiduIDB";
    let dbPromise = null;


//Gatsby SSR membutuhkan bypass
if (typeof window !== "undefined"){
    dbPromise = await openDB(dbName, 1, {
        upgrade(db){
            db.createObjectStore("token");
            db.createObjectStore("soalll");
            db.createObjectStore("siswa");
        },
    });
}
}

export default Db;





