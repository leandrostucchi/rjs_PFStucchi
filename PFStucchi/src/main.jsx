import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOZtUL5VCvXQ0MbWVwjmVLiIEoJfc1x7c",
  authDomain: "ecommerce-e4d8e.firebaseapp.com",
  projectId: "ecommerce-e4d8e",
  storageBucket: "ecommerce-e4d8e.appspot.com",
  messagingSenderId: "211203675204",
  appId: "1:211203675204:web:1286ba1e92fe5f32fc9811"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
