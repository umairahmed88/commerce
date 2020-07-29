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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
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
            console.log('error creating user', error.msg)
        }
    }
    return userRef;
};

export const addCollectionAndDocuments = async (
    collectionKey, 
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
    const tranformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
        const { title, items } = docSnapshot.data();
        
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: docSnapshot.id,
            title,
            items
        };
    });

    return tranformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

firebase.initializeApp(config);

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;