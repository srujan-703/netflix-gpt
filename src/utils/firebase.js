// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4OWiYiVQv57gE1VSOfupo4QZKED0PpjE",
  authDomain: "netflixgpt-a624d.firebaseapp.com",
  projectId: "netflixgpt-a624d",
  storageBucket: "netflixgpt-a624d.firebasestorage.app",
  messagingSenderId: "307768893885",
  appId: "1:307768893885:web:f3697417cec9b37c5eb2d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
