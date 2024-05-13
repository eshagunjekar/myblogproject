// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
export const apiKey = "AIzaSyA3FzDGMGf8uTbPSDN--huzsM_P-EIXt_k"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3FzDGMGf8uTbPSDN--huzsM_P-EIXt_k",
  authDomain: "mynewblog-900be.firebaseapp.com",
  projectId: "mynewblog-900be",
  storageBucket: "mynewblog-900be.appspot.com",
  messagingSenderId: "421214364890",
  appId: "1:421214364890:web:ff3735d2c10e40190071e3",
  measurementId: "G-GP206VGEBT"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)
