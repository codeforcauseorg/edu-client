import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCtj9qDUcjl8M6H4usKBoJerbCxn3Of-pA",
  authDomain: "keenwpractice.firebaseapp.com",
  projectId: "keenwpractice",
  storageBucket: "keenwpractice.appspot.com",
  messagingSenderId: "981171596013",
  appId: "1:981171596013:web:822e67c6a1b3b1d8f13ae4",
  measurementId: "G-MNRB0XL6QD", // ...
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const storage = firebase.storage();
