import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-F1jkv9hpEZqIbqTeFE_wb4fF84Tk_tk",
  authDomain: "todo-app-v3-c8d91.firebaseapp.com",
  projectId: "todo-app-v3-c8d91",
  storageBucket: "todo-app-v3-c8d91.firebasestorage.app",
  messagingSenderId: "133048295006",
  appId: "1:133048295006:web:f58be0576cca3a787b1ecf",
  measurementId: "G-EWPJ8YC7DD"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
