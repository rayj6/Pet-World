import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase configuration details
  apiKey: "AIzaSyCWAsAugEwS6wA6LTdr1_tcpuZw0ddaY4A",
  authDomain: "mypet-f7183.firebaseapp.com",
  projectId: "mypet-f7183",
  storageBucket: "mypet-f7183.appspot.com",
  messagingSenderId: "41775824908",
  appId: "1:41775824908:web:a1fdf481a05b259f60ae29",
  measurementId: "G-XJBDEB8FVT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
