// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtf4jD-OKBmSq1ZfpESQNtZtB4njjZIDQ",
  authDomain: "react-57765-victoria-costabel.firebaseapp.com",
  projectId: "react-57765-victoria-costabel",
  storageBucket: "react-57765-victoria-costabel.appspot.com",
  messagingSenderId: "155716876823",
  appId: "1:155716876823:web:9fdc3086fe4408a32cba52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)