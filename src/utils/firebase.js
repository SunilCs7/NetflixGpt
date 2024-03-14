// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcTrnj59jDSpI2OoyiVTxicNlsbdd-bwM",
  authDomain: "netflixgpt-39800.firebaseapp.com",
  projectId: "netflixgpt-39800",
  storageBucket: "netflixgpt-39800.appspot.com",
  messagingSenderId: "27909263083",
  appId: "1:27909263083:web:06b02bd781ab390ee8b8ae",
  measurementId: "G-W69WNM5H33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
