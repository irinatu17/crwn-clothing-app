import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDOhtxecCDJSHHGxg0hBfGhwSRw1rwxCzg",
  authDomain: "crwn-db-c5595.firebaseapp.com",
  projectId: "crwn-db-c5595",
  storageBucket: "crwn-db-c5595.appspot.com",
  messagingSenderId: "259361650765",
  appId: "1:259361650765:web:848a2186761f5712d50404",
  measurementId: "G-D96WL124KN"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
 
  if (!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;