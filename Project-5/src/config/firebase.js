// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0OJz1PzNoUTDnX2F0oV3BcFNIWpkN1XY",
  authDomain: "vite-contact-518b8.firebaseapp.com",
  projectId: "vite-contact-518b8",
  storageBucket: "vite-contact-518b8.appspot.com",
  messagingSenderId: "369331671737",
  appId: "1:369331671737:web:373eb02394f44fb8ae0168"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);