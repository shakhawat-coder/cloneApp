import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyA67H9rV4jaE-JjIAbekIDZzSeT0tjcVUg",
  authDomain: "chat-app-748a8.firebaseapp.com",
  projectId: "chat-app-748a8",
  storageBucket: "chat-app-748a8.appspot.com",
  messagingSenderId: "65553622190",
  appId: "1:65553622190:web:131fb4ece50d1ecc74f93f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);