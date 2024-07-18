import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy71DhnwEL4cgbca83zgbm0xNUqvR3qEU",
  authDomain: "myecom-5943e.firebaseapp.com",
  projectId: "myecom-5943e",
  storageBucket: "myecom-5943e.appspot.com",
  messagingSenderId: "975266394850",
  appId: "1:975266394850:web:d52b9df4976240570a24bb",
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { auth, fireDB };
