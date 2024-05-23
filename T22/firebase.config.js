// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7uWXmn3g-xHnnlnNvFnLYZy9VuL3jNAE",
  authDomain: "dmt22-42830.firebaseapp.com",
  projectId: "dmt22-42830",
  storageBucket: "dmt22-42830.appspot.com",
  messagingSenderId: "783747663389",
  appId: "1:783747663389:web:96b563107c020626d3a8f4",
  measurementId: "G-HLP5HY5LYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db}

const analytics = getAnalytics(app);