 import firebase from "firebase/app";
 import "firebase/auth";
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCvnU6_l3Y2oebwpuki2ZcQJ2ahRTFnfik",
    authDomain: "shoutout-lab.firebaseapp.com",
    projectId: "shoutout-lab",
    storageBucket: "shoutout-lab.appspot.com",
    messagingSenderId: "831372258940",
    appId: "1:831372258940:web:5247f8b7e99a49fcc663f9",
    measurementId: "G-5HS1CLC9JK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  export const authProvider = new firebase.auth.GoogleAuthProvider();
  
  
  export function signInWithGoogle(): void {
      firebase.auth().signInWithPopup(authProvider);
  }

  export function signOut(): void {
      firebase.auth().signOut();
  }

  export default firebase;
