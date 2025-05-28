// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB26UN0xUbXuNwT92c24rpqdQgTb6mgZT0",
  authDomain: "cangkuguanli-57be3.firebaseapp.com",
  databaseURL: "https://cangkuguanli-57be3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cangkuguanli-57be3",
  storageBucket: "cangkuguanli-57be3.firebasestorage.app",
  messagingSenderId: "680909943577",
  appId: "1:680909943577:web:7c01629353fb37a6a10b88",
  measurementId: "G-R73KJ7BDDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
