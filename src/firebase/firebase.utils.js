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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // userAuth est l'objet renvoyé par l'api google
  if (!userAuth) return;

  // get a reference on the document user
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // get the data
  const snapShot = await userRef.get();

  // the user does not exist in the database yet, we are going to create him.
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating message :", error.message);
    }
  }

  return userRef;

  console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
