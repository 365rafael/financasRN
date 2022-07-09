import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyCPca_EJMf460r1p-yhc8Ww542aCT0CZms",

  authDomain: "meuapp-b1a00.firebaseapp.com",

  databaseURL: "https://meuapp-b1a00-default-rtdb.firebaseio.com",

  projectId: "meuapp-b1a00",

  storageBucket: "meuapp-b1a00.appspot.com",

  messagingSenderId: "811682907035",

  appId: "1:811682907035:web:2ca1f3cacaa42c0a5e973e",

  measurementId: "G-XJ42JKP4RD",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
