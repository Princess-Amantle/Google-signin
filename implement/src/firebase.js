// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByYYWvc6x7x2DuvwyqcTsjb-zZ5WlRz04",
  authDomain: "sign-in-cc331.firebaseapp.com",
  projectId: "sign-in-cc331",
  storageBucket: "sign-in-cc331.appspot.com",
  messagingSenderId: "104212427348",
  appId: "1:104212427348:web:0c2ab483cd70b2919d33c1",
  measurementId: "G-M7JPEE45H6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};
