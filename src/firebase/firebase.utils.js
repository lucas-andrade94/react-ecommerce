import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBAoGkJq4PFdC09p9UnlgvbJb-Tqx8KITU",
  authDomain: "crwn-db-32bf1.firebaseapp.com",
  projectId: "crwn-db-32bf1",
  storageBucket: "crwn-db-32bf1.appspot.com",
  messagingSenderId: "1076123383927",
  appId: "1:1076123383927:web:b7011921dbcb62f1f16e72",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
