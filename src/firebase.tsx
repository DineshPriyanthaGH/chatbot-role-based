 import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCau9Z-xUy8zI1wl4x7aIOFXLmNERUpTkQ",  // Replace with your actual Firebase API key
  authDomain: "role-based-chatbot.firebaseapp.com",
  databaseURL: "https://role-based-chatbot.firebaseio.com",  // Firebase Realtime Database URL
  projectId: "role-based-chatbot",
  storageBucket: "role-based-chatbot.appspot.com",
  messagingSenderId: "117248371990579621702",
  appId: "1:117248371990579621702:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);   //db
export const auth = getAuth(app);     //auth