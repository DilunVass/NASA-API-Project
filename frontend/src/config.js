// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpHE7V3jKhl9eigFJcIdL7MgWrO3eaDpc",
  authDomain: "afproject-4f2ca.firebaseapp.com",
  projectId: "afproject-4f2ca",
  storageBucket: "afproject-4f2ca.appspot.com",
  messagingSenderId: "156495697333",
  appId: "1:156495697333:web:0b3f03b3997df5af18f5fc",
  measurementId: "G-DNSVKX913J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};