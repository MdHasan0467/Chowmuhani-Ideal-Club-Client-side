// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC87m2dEbUfMqcciYScOwisRHTZtsLUX2Q",
  authDomain: "chowmuhani-ideal-club.firebaseapp.com",
  projectId: "chowmuhani-ideal-club",
  storageBucket: "chowmuhani-ideal-club.firebasestorage.app",
  messagingSenderId: "913314741244",
  appId: "1:913314741244:web:556d767973bc38afb35079"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 // Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);