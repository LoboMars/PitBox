// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD7uWXmn3g-xHnnlnNvFnLYZy9VuL3jNAE",
  authDomain: "dmt22-42830.firebaseapp.com",
  databaseURL: "https://dmt22-42830-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dmt22-42830",
  storageBucket: "dmt22-42830.appspot.com",
  messagingSenderId: "783747663389",
  appId: "1:783747663389:web:96b563107c020626d3a8f4",
  measurementId: "G-HLP5HY5LYZ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, db ,auth};

