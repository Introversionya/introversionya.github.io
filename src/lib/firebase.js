import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// import {
//   PUBLIC_FIREBASE_API_KEY,
//   PUBLIC_FIREBASE_AUTH_DOMAIN,
//   PUBLIC_FIREBASE_PROJECT_ID,
//   PUBLIC_FIREBASE_STORAGE_BUCKET,
//   PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   PUBLIC_FIREBASE_APP_ID
// } from '$env/static/public';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const dbRef = ref(database, 'users');
