// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage}from"firebase/storage";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyA9gwCCyYAHU9JdmYQzXm8b_nZIbk-OalU",
    authDomain: "foodgallery-11f09.firebaseapp.com",
    projectId: "foodgallery-11f09",
    storageBucket: "foodgallery-11f09.appspot.com",
    messagingSenderId: "763261753415",
    appId: "1:763261753415:web:23d2d57496e70fe2063962"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
