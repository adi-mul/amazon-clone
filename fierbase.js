// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyCWtHEK9B56_u06kWbx2UszUVjDVQJgZEw",
    authDomain: "challenge-57d5f.firebaseapp.com",
    projectId: "challenge-57d5f",
    storageBucket: "challenge-57d5f.appspot.com",
    messagingSenderId: "836579721416",
    appId: "1:836579721416:web:0fddb66f5a5f9a818665fd",
    measurementId: "G-386YN64F7S"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };