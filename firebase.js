// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC2yyofP9afgY3gu5-KmhuOXt39YwdUYbM",
    authDomain: "potshop-da2d9.firebaseapp.com",
    projectId: "potshop-da2d9",
    storageBucket: "potshop-da2d9.appspot.com",
    messagingSenderId: "630518680588",
    appId: "1:630518680588:web:4059a18a672e37808af229",
    measurementId: "G-9EQ9XZ35KK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};