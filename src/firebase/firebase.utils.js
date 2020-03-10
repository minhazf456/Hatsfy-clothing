
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDazl6N23uy4osVIrlYGUHagdxsdKIpnws",
    authDomain: "crwn-db-e78b6.firebaseapp.com",
    databaseURL: "https://crwn-db-e78b6.firebaseio.com",
    projectId: "crwn-db-e78b6",
    storageBucket: "crwn-db-e78b6.appspot.com",
    messagingSenderId: "170738371302",
    appId: "1:170738371302:web:30d9b19725c4fc2dc0c927",
    measurementId: "G-KS3MKQRBP1"
  };
  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return ;

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
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;