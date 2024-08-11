// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDO7DI9ZaZw2ixAa2ZzuLMzUeI6jiEvJl0",
    authDomain: "onboarding-7181e.firebaseapp.com",
    projectId: "onboarding-7181e",
    storageBucket: "onboarding-7181e.appspot.com",
    messagingSenderId: "1098259486356",
    appId: "1:1098259486356:web:56d07afbd3800063b38681"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      uid: user.uid
    });
  } catch (error) {
    console.error(error);
  }
};

const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};

export { auth, signInWithGoogle, logOut, db };
