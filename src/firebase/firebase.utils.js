import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBPjmXv8_WxVm2iMPN1cqMdr_UbMm3tvMk",
  authDomain: "crown-db-cec61.firebaseapp.com",
  databaseURL: "https://crown-db-cec61.firebaseio.com",
  projectId: "crown-db-cec61",
  storageBucket: "",
  messagingSenderId: "205021347739",
  appId: "1:205021347739:web:d8720a07b59557e5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
