// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import  Constants  from "expo-constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const KEYS = Constants.manifest.extra;
console.log(KEYS);
console.log(Constants.manifest.debuggerHost);
const firebaseConfig = {
    apiKey: KEYS.apiKey,
    authDomain: KEYS.authDomain,
    projectId: KEYS.projectId,
    storageBucket: KEYS.storageBucket,
    messagingSenderId: KEYS.messagingSenderId,
    appId: KEYS.appId,
    measurementId: KEYS.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
