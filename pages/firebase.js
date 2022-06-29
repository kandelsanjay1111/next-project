import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

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
const db=getFirestore();

export {db,app};