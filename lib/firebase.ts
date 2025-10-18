import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhqFbOIepcjeWRmBr0pm6EmpKt7eHnjCw",
  authDomain: "agf-partner.firebaseapp.com",
  projectId: "agf-partner",
  storageBucket: "agf-partner.firebasestorage.app",
  messagingSenderId: "215901065229",
  appId: "1:215901065229:web:d6d9084b17c7e2b099c544"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
