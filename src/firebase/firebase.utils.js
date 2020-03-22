import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBPQq4uH82uTXOeSMamaNsfU3VnMFCVQ6o",
    authDomain: "ecommerce-db-bac64.firebaseapp.com",
    databaseURL: "https://ecommerce-db-bac64.firebaseio.com",
    projectId: "ecommerce-db-bac64",
    storageBucket: "ecommerce-db-bac64.appspot.com",
    messagingSenderId: "568495889031",
    appId: "1:568495889031:web:7e85459a4288faa0167622",
    measurementId: "G-RDES4FXEVJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
