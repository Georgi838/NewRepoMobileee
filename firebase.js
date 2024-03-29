import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {

    REACT_NATIVE_APP_API_KEY,
    REACT_NATIVE_APP_AUTH_DOMAIN,
    REACT_NATIVE_APP_PROJECT_ID,
    REACT_NATIVE_APP_STORAGE_BUCKET,
    REACT_NATIVE_APP_MESSAGIND_SENDER_ID,
    REACT_NATIVE_APP_APP_ID,
    REACT_NATIVE_APP_MEASUREMENT_ID

} from "@env";


const firebaseConfig = {
    apiKey: REACT_NATIVE_APP_API_KEY,
    authDomain: REACT_NATIVE_APP_AUTH_DOMAIN,
    projectId: REACT_NATIVE_APP_PROJECT_ID,
    storageBucket: REACT_NATIVE_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_NATIVE_APP_MESSAGIND_SENDER_ID,
    appId: REACT_NATIVE_APP_APP_ID,
    measurementId: REACT_NATIVE_APP_MEASUREMENT_ID
};


// const app = initializeApp(firebaseConfig);


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth, app} ;