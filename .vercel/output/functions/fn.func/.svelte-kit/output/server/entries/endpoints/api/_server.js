import { j as json } from "../../../chunks/index.js";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
const FIREBASE_API_KEY = "AIzaSyCfgb00G10NaPSizl5uLW44A2H1mJV_Hwc";
const FIREBASE_AUTH_DOMAIN = "anthony-is-dev.firebaseapp.com";
const FIREBASE_PROJECT_ID = "anthony-is-dev";
const FIREBASE_STORAGE_BUCKET = "anthony-is-dev.appspot.com";
const FIREBASE_MESSAGING_SENDER_ID = "701625742894";
const FIREBASE_APP_ID = "1:701625742894:web:492e95bc3b219a41a611bf";
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database, "users");
async function POST({ request }) {
  const { name, surname } = await request.json();
  const data = { name, surname };
  try {
    await set(dbRef, data);
    return json("Data written successfully");
  } catch (error) {
    return { status: 500, body: "Error writing data: " + error };
  }
}
export {
  POST
};
