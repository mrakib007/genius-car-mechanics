// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIoVDX4u3CtrDD5aeoeZfZrE-7oqFVb20",
  authDomain: "genius-car-services-bc517.firebaseapp.com",
  projectId: "genius-car-services-bc517",
  storageBucket: "genius-car-services-bc517.appspot.com",
  messagingSenderId: "791645068611",
  appId: "1:791645068611:web:fc9b14d3e123154dd423f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;