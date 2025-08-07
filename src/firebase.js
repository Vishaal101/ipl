// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4klXkAylH1a2-jVqLLQAxKViILAYFKwk",
  authDomain: "ipl-580.firebaseapp.com",
  projectId: "ipl-580",
  storageBucket: "ipl-580.firebasestorage.app",
  messagingSenderId: "544767942027",
  appId: "1:544767942027:web:1b8d6a8e440ae63141238e",
  measurementId: "G-TQW2TLEBGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);