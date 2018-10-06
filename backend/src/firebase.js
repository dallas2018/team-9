// src/firebase.js
import firebase from 'firebase'
const config = {
    apiKey: "",
    authDomain: "backendteam9.firebaseapp.com",
    databaseURL: "https://backendteam9.firebaseio.com",
    projectId: "backendteam9",
    storageBucket: "backendteam9.appspot.com",
    messagingSenderId: "934785241256"
};
firebase.initializeApp(config);

export default firebase;