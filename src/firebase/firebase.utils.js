import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const Config = {
  apiKey: "AIzaSyCmMpkV4FQKCf5L4gutv-mQZjm2FqGEXT8",
  authDomain: "crwn-db-8eb39.firebaseapp.com",
  projectId: "crwn-db-8eb39",
  storageBucket: "crwn-db-8eb39.appspot.com",
  messagingSenderId: "669758952616",
  appId: "1:669758952616:web:4d88146f47dc16fd969e9d",
  measurementId: "G-VWE9YZERCB",
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
