// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnFFDjK60sw24mJs5tydFzkXVQ_s8azGY",
  authDomain: "frontend-rnd-daf7d.firebaseapp.com",
  databaseURL: "https://frontend-rnd-daf7d-default-rtdb.firebaseio.com",
  projectId: "frontend-rnd-daf7d",
  storageBucket: "frontend-rnd-daf7d.appspot.com",
  messagingSenderId: "1035807359419",
  appId: "1:1035807359419:web:010fd959d083ba6992849e",
  measurementId: "G-B7LB88KBGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore();
const hello="hello";

export default hello;