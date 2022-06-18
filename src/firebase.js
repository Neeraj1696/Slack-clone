import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACINWSPv-1yBaqrkJWOpF5l88hkm4rwjs",
  authDomain: "slack-clone-6789f.firebaseapp.com",
  projectId: "slack-clone-6789f",
  storageBucket: "slack-clone-6789f.appspot.com",
  messagingSenderId: "813069969259",
  appId: "1:813069969259:web:d4bc3e50cab37922774e2e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
