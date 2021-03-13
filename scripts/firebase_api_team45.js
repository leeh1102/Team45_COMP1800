// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAcS1imL9a33uTPgLFYx-3KKEQgKqrZNKg",
    authDomain: "comp1800-team45-02.firebaseapp.com",
    projectId: "comp1800-team45-02",
    storageBucket: "comp1800-team45-02.appspot.com",
    messagingSenderId: "348396662166",
    appId: "1:348396662166:web:82c6de759eceb968e201b7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();  //add this to read and write 
