// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB70YwMq1rcOasU3DyYV3jtdsNdquhCrrc",
  authDomain: "afiqtodolistreactnative.firebaseapp.com",
  projectId: "afiqtodolistreactnative",
  storageBucket: "afiqtodolistreactnative.appspot.com",
  messagingSenderId: "941936280682",
  appId: "1:941936280682:web:29551ae5a7a1fe1819f613",
  measurementId: "G-K8LBTDYHE1"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);