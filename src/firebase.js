// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjHQeE7La0bUXuSlJpFTHk-AvLbRK0AsQ",
  authDomain: "anacamps-rodaje.firebaseapp.com",
  projectId: "anacamps-rodaje",
  storageBucket: "anacamps-rodaje.appspot.com",
  messagingSenderId: "117159618599",
  appId: "1:117159618599:web:f2bffb5de134353a0c4602"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig) 
export const db = getFirestore(app)