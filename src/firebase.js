import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6WBrFwkcskspXQ7UnBZ6Ki4OfaTnfQ1Q",
  authDomain: "exclusive-shop-project.firebaseapp.com",
  projectId: "exclusive-shop-project",
  storageBucket: "exclusive-shop-project.firebasestorage.app",
  messagingSenderId: "470642496563",
  appId: "1:470642496563:web:1a108961dfb86960923f46",
  measurementId: "G-K17G760ETL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
