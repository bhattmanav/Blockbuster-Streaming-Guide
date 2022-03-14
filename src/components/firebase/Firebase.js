// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnNK1RhwIgLLTWodYB3hkfqXdwbyiv93o",
  authDomain: "blockbuster-35629.firebaseapp.com",
  projectId: "blockbuster-35629",
  storageBucket: "blockbuster-35629.appspot.com",
  messagingSenderId: "495583967167",
  appId: "1:495583967167:web:bbd976e1e03603c683d30a",
  measurementId: "G-HDBZJSDNNH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
