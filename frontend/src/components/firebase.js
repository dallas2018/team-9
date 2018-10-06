// src/firebase.js
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCS44zGeVWA_AZ1K36yMwbgfny54xF8ZMk",
    authDomain: "backendteam9.firebaseapp.com",
    databaseURL: "https://backendteam9.firebaseio.com",
    projectId: "backendteam9",
    storageBucket: "backendteam9.appspot.com",
    messagingSenderId: "934785241256"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;