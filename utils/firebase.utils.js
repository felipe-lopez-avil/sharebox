import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDv1kJudXzE4v0MtM4lGmIwGOLHXgCl4Xo",
    authDomain: "sharebox-db.firebaseapp.com",
    projectId: "sharebox-db",
    storageBucket: "sharebox-db.appspot.com",
    messagingSenderId: "422045840798",
    appId: "1:422045840798:web:fd466f5edab909abbdd28f",
    measurementId: "G-FP02C0KLBH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;