// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeZF1uG6FwgpIp0pQgKkHEwm0Gi1bnpik",
  authDomain: "netfixgpt-5caad.firebaseapp.com",
  projectId: "netfixgpt-5caad",
  storageBucket: "netfixgpt-5caad.firebasestorage.app",
  messagingSenderId: "707637511531",
  appId: "1:707637511531:web:b7b655451fd1218927382e",
  measurementId: "G-FJKEKK6VGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);