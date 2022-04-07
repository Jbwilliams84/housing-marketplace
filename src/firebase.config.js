// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaalB7mg6qUkaNRCXt8pKCVMRphbVsYqw",
  authDomain: "house-marketplace-app-bdda9.firebaseapp.com",
  projectId: "house-marketplace-app-bdda9",
  storageBucket: "house-marketplace-app-bdda9.appspot.com",
  messagingSenderId: "1039493932342",
  appId: "1:1039493932342:web:3d411b3312186ed650ff97",
  measurementId: "G-Q5CSTST13Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
