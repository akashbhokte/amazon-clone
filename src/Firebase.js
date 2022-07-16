// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBJwkagohG1Q9guCZHVfmt9qAzEjLFOo50",
    authDomain: "clone-812b1.firebaseapp.com",
    projectId: "clone-812b1",
    storageBucket: "clone-812b1.appspot.com",
    messagingSenderId: "1025112556357",
    appId: "1:1025112556357:web:3117aa1501f5930c00742c",
    measurementId: "G-Q1KZJ5PPN1"
});

const auth = firebase.auth();
export { auth }