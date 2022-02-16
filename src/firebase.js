// import { initializeApp, getApp, getApps } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAi4_3DhbCs3hJQC55c6PSE6DDQ5OGKUpw",
    authDomain: "facebook-clone-58b8f.firebaseapp.com",
    projectId: "facebook-clone-58b8f",
    storageBucket: "facebook-clone-58b8f.appspot.com",
    messagingSenderId: "685873778346",
    appId: "1:685873778346:web:a3d70fa1e07518fb258ad3"
};

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore();
// const storage = getStorage();

// export { app, db, storage };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
