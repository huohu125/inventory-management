// src/firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyB26UN0xUbXuNwT92c24rpqdQgTb6mgZT0",
  authDomain: "cangkuguanli-57be3.firebaseapp.com",
  databaseURL: "https://cangkuguanli-57be3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cangkuguanli-57be3",
  storageBucket: "cangkuguanli-57be3.firebasestorage.app",
  messagingSenderId: "680909943577",
  appId: "1:680909943577:web:7c01629353fb37a6a10b88"
};

// 初始化Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
