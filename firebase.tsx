// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
//import firebase from "firebase/app";
// import firebase from "firebase/compat/app";
//import * as firebase from "firebase/app";
import { initializeApp }from 'firebase/app';
import {getAuth } from 'firebase/auth';
//import "firebase/compat/firestore";
//import firebase from '../firebase'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV8dEo94eA3eDkrkfcXmoT0j4Hg_Z2O2I",
  authDomain: "rideez-459ac.firebaseapp.com",
  projectId: "rideez-459ac",
  storageBucket: "rideez-459ac.appspot.com",
  messagingSenderId: "67221433293",
  appId: "1:67221433293:web:3a7033794855aa130b3284",
  measurementId: "G-2WFB1SRMEB"
};


const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
