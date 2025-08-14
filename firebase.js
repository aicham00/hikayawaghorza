// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// إعدادات Firebase الخاصة بتطبيقك
const firebaseConfig = {
  apiKey: "AIzaSyD9IV4OY10BqRRmW5ZetF-cNTF_8wZsEF4",
  authDomain: "taleandstitch.firebaseapp.com",
  projectId: "taleandstitch",
  storageBucket: "taleandstitch.appspot.com",
  messagingSenderId: "589312061871",
  appId: "1:589312061871:web:82acc6564ce59973107f5a",
  measurementId: "G-MYEYDR2JVS"
};

// تهيئة Firebase و Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
