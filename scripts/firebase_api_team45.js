
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDdAt4QxorKQI1gypA8YRQZQx1M4dzxLeU",
    authDomain: "comp1800-team45.firebaseapp.com",
    projectId: "comp1800-team45",
    storageBucket: "comp1800-team45.appspot.com",
    messagingSenderId: "368836451385",
    appId: "1:368836451385:web:a6b15b5158c3b0b5e801e8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();  //add this to read and write 
