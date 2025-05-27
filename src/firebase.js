// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// 把这里的 YOUR_xxx 替换成你从 Firebase 控制台复制的真实信息
const firebaseConfig = {
  apiKey: "AIzaSyB26UN0xUbXuNwT92c24rpqdQgTb6mgZT0", // 例如："AIzaSyB...z3vW"
  authDomain: "cangkuguanli-57be3.firebaseapp.com", // 例如："cangkuguanli-57be3.firebaseapp.com"
  databaseURL: "https://cangkuguanli-57be3.firebaseio.com/", // 例如："https://cangkuguanli-57be3.firebaseio.com/"
  projectId: "cangkuguanli-57be3", // 例如："cangkuguanli-57be3"
  storageBucket: "cangkuguanli-57be3.firebasestorage.app", // 例如："cangkuguanli-57be3.appspot.com"
  messagingSenderId: "680909943577", // 例如："1234567890"
  appId: "1:680909943577:web:60d83cee9f59f229a10b88", // 例如："1:1234567890:web:abc123..."
};

// 初始化 Firebase（不用改）
const app = initializeApp(firebaseConfig);

// 导出数据库实例（不用改）
export const database = getDatabase(app);
