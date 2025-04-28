import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCblu6EutgrguIvqiEN9pcSlXowvtX1E9k",
  authDomain: "sewage-14855.firebaseapp.com",
  projectId: "sewage-14855",
  storageBucket: "sewage-14855.firebasestorage.app",
  messagingSenderId: "884772090844",
  appId: "1:884772090844:web:54ded22dacd6dd5ebcd519",
  measurementId: "G-RYM6PRZHJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export the Firestore database instance for use in other components
export { db };