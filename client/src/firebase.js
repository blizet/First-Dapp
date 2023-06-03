import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBtKmREiCtR1hCil2LbtGDvZxWxsqArmi8",
  authDomain: "kridin-1b3e9.firebaseapp.com",
  projectId: "kridin-1b3e9",
  storageBucket: "kridin-1b3e9.appspot.com",
  messagingSenderId: "152546978272",
  appId: "1:152546978272:web:584979f281462d7aaee385",
  measurementId: "G-S96Q6HBXPX"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider = new GoogleAuthProvider();

export {auth, provider};
export default db;