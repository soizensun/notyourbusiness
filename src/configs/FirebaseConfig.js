import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAXUX4DPxpdb1HA3b_to3FQYdiwxWL6020",
    authDomain: "notyourbusiness-cac7d.firebaseapp.com",
    projectId: "notyourbusiness-cac7d",
    storageBucket: "notyourbusiness-cac7d.appspot.com",
    messagingSenderId: "484293375214",
    appId: "1:484293375214:web:09723e30b0f4a4dd14efff"
};

(!firebase.apps.length) ? firebase.initializeApp(firebaseConfig) : firebase.app(); 
    
const db = firebase.firestore()
const auth = firebase.auth()

export { db, firebase, auth };