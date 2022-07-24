// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW4bpd3u_xh7-jMVgFsHjd_yH0zRK6pbM",
  authDomain: "apik-film.firebaseapp.com",
  projectId: "apik-film",
  storageBucket: "apik-film.appspot.com",
  messagingSenderId: "349265669070",
  appId: "1:349265669070:web:71af3fc954d307e7dc599f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };