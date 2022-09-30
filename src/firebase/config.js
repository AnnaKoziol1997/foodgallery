import * as firebase from 'firebase/app';
import { getStorage } from'firebase/storage';
import {getFirestore} from 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyA9gwCCyYAHU9JdmYQzXm8b_nZIbk-OalU",
    authDomain: "foodgallery-11f09.firebaseapp.com",
    projectId: "foodgallery-11f09",
    storageBucket: "foodgallery-11f09.appspot.com",
    messagingSenderId: "763261753415",
    appId: "1:763261753415:web:23d2d57496e70fe2063962"
  };
  
  firebase.initializeApp(firebaseConfig);

  const projectStorage = getStorage(firebase);
  const projectFirestore = getFirestore(firebase);
 // const timestamp = new getStorage(firebase).FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore};