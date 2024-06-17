import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT3YTqx1l-t3WAC1YV1NglOGZzviq3LE0",
  authDomain: "crud-project-ebd32.firebaseapp.com",
  projectId: "crud-project-ebd32",
  storageBucket: "crud-project-ebd32.appspot.com",
  messagingSenderId: "515296147761",
  appId: "1:515296147761:web:e33051f511c821d7bd5810"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export default firebase;

export {
    app
}