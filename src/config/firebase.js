// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzx-MV-4gjW27VnsF1tICE9L0daKZN9uY",
  authDomain: "react-social-media-ae619.firebaseapp.com",
  projectId: "react-social-media-ae619",
  storageBucket: "react-social-media-ae619.appspot.com",
  messagingSenderId: "168407607837",
  appId: "1:168407607837:web:94b263927a48327eacb4f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
