// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// 从 Firebase 控制台获取的配置信息
const firebaseConfig = {
  apiKey: "AIzaSyB26UN0xUbXuNwT92c24rpqdQgTb6mgZT0",
  authDomain: "cangkuguanli-57be3.firebaseapp.com",
  databaseURL: "https://cangkuguanli-57be3.firebaseio.com",
  projectId: "cangkuguanli-57be3",
  storageBucket: "cangkuguanli-57be3.firebasestorage.app",
  messagingSenderId: "680909943577",
  appId: "1:680909943577:web:60d83cee9f59f229a10b88",
  measurementId: "G-VW9M3F87XQ"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 获取数据库实例并导出
export const database = getDatabase(app);
