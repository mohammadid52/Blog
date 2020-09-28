import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBNjT2A03vyQlop2itjoWHkUVPp4ZGYy2s",
  authDomain: "blog-93e08.firebaseapp.com",
  databaseURL: "https://blog-93e08.firebaseio.com",
  projectId: "blog-93e08",
  storageBucket: "blog-93e08.appspot.com",
  messagingSenderId: "221745827640",
  appId: "1:221745827640:web:37385b796a7f657f22bbcd",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
