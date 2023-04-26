// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV_b0vVqVjiZ7C0lM8XDlvTaeFEI_OzAs",
  authDomain: "savory-bites-auth.firebaseapp.com",
  projectId: "savory-bites-auth",
  storageBucket: "savory-bites-auth.appspot.com",
  messagingSenderId: "744330219267",
  appId: "1:744330219267:web:cdce55ded0fe8084cb2336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default(app)