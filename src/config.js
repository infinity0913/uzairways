import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyArFCSw-skh3evs8zxjo_f-flrxMp4JHC0",
  authDomain: "said-f223c.firebaseapp.com",
  projectId: "said-f223c",
  storageBucket: "said-f223c.appspot.com",
  messagingSenderId: "77159817650",
  appId: "1:77159817650:web:8b1da2e155b3557097c4ab",
  measurementId: "G-PRSDZMJ51N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()