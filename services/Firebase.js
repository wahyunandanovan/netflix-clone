import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDof_xedQASuHtYTYl9pzlBq6dTxIb3_AM",
  authDomain: "nextjs-auth-46d36.firebaseapp.com",
  projectId: "nextjs-auth-46d36",
  storageBucket: "nextjs-auth-46d36.appspot.com",
  messagingSenderId: "1012570338663",
  appId: "1:1012570338663:web:d6690658a1ce0c1b2a2bc2",
};

// const app = initializeApp(firebaseConfig);
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const FirebaseAuth = getAuth();

export const Authentication = () => {
  initializeApp(firebaseConfig);
};

export const SignUp = async (email, password) => {
  await createUserWithEmailAndPassword(FirebaseAuth, email, password);
};

export const SignIn = async (email, password) => {
  console.log(email, password);
  await signInWithEmailAndPassword(FirebaseAuth, email, password);
};
export const SignOut = async () => {
  await signOut(FirebaseAuth);
};

export const GetSignInErrorMassage = (code) => {
  switch (code) {
    case "auth/user-not-found":
      return "Email tidak terdaftar";
    case "auth/wrong-password":
    default:
      return "Email atau password salah";
  }
};
