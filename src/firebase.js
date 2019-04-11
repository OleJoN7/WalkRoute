import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBskNIc1mx42WD33krebZQdCj9bCCP7ZYA",
    authDomain: "routes-b8d1c.firebaseapp.com",
    databaseURL: "https://routes-b8d1c.firebaseio.com",
    projectId: "routes-b8d1c",
    storageBucket: "routes-b8d1c.appspot.com",
    messagingSenderId: "334603153200"
};
firebase.initializeApp(config);
export const firestore = firebase.firestore();

window.firebase = firebase
export default firebase;

