// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnhgvNifksDtXX4fVhtBBd2SBW0VYBLow",
  authDomain: "chat-app-9cc11.firebaseapp.com",
  projectId: "chat-app-9cc11",
  storageBucket: "chat-app-9cc11.appspot.com",
  messagingSenderId: "691668971938",
  appId: "1:691668971938:web:c7b006436f172cb96f82fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
