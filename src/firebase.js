// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZFChgA27aMdiiG-SBZL0hukwEEmbtLeo",
  authDomain: "humeur-3a407.firebaseapp.com",
  databaseURL: "https://humeur-3a407-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "humeur-3a407",
  storageBucket: "humeur-3a407.firebasestorage.app",
  messagingSenderId: "609714621091",
  appId: "1:609714621091:web:9dda82c79fc8e368230d16",
  measurementId: "G-TG56CLLZSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase(app);

export { database };