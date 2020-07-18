import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBcQ-OYHNVJG7f5zd6RImPBl4aQE1L9E5w",
    authDomain: "commerce-db-87622.firebaseapp.com",
    databaseURL: "https://commerce-db-87622.firebaseio.com",
    projectId: "commerce-db-87622",
    storageBucket: "commerce-db-87622.appspot.com",
    messagingSenderId: "154573422596",
    appId: "1:154573422596:web:f7c8bb9b35186f38c5b551",
    measurementId: "G-KW23X8MNY1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_accouny'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;