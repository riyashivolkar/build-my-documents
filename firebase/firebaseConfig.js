// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration (copied from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyCHendWNNZlWzA8OP5m6PPxeUHxZmxu_24",
  authDomain: "build-my-documents.firebaseapp.com",
  projectId: "build-my-documents",
  storageBucket: "build-my-documents.appspot.com",
  messagingSenderId: "338398231995",
  appId: "1:338398231995:web:4e26fa7fcfd2de35fbd89e",
  measurementId: "G-YVEKDCFDD1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

const analytics = getAnalytics(app);

export { db, storage };
