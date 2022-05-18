import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClzbcrIka_2bFOMQQLFr52BtDs3EbgYzY",
  authDomain: "call-system-d8c18.firebaseapp.com",
  projectId: "call-system-d8c18",
  storageBucket: "call-system-d8c18.appspot.com",
  messagingSenderId: "891226554274",
  appId: "1:891226554274:web:7e6e59eaacb2e6ae27fcfb",
  measurementId: "G-RCPHWRWHNS",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
