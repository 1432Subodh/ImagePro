import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCteSTz8WjmBMGeZS7jh1YXDs9OZABdXd4",
  authDomain: "image-pro-293b0.firebaseapp.com",
  projectId: "image-pro-293b0",
  storageBucket: "image-pro-293b0.firebasestorage.app",
  messagingSenderId: "318671327847",
  appId: "1:318671327847:web:361a4ee44b082c5305fac2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth, db}
