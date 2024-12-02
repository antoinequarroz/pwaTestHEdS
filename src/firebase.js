// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0JvtdSOhMbuLmYNlAUoSCN4CIHIH14-A",
  authDomain: "testpwa-37caf.firebaseapp.com",
  projectId: "testpwa-37caf",
  storageBucket: "testpwa-37caf.firebasestorage.app",
  messagingSenderId: "676930085634",
  appId: "1:676930085634:web:7c9b5f9673419890bb181b",
  measurementId: "G-M1NDH60SMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);