import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYj_Srw69aleFx4Jbm0OeqmcAwHrcT-4Q",
  authDomain: "mary-delicatessen.firebaseapp.com",
  projectId: "mary-delicatessen",
  storageBucket: "mary-delicatessen.appspot.com",
  messagingSenderId: "166251273593",
  appId: "1:166251273593:web:ab1bc66971a38e31bf63a8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
