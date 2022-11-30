import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBSi1kA4WyX4N9fzht6kdN6Sv_d8guZ4To",
  authDomain: "linkedin-clone-d790c.firebaseapp.com",
  projectId: "linkedin-clone-d790c",
  storageBucket: "linkedin-clone-d790c.appspot.com",
  messagingSenderId: "39096586527",
  appId: "1:39096586527:web:d4cd92d068df8c8f93e02a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); 
const auth = firebase.auth();

export { db, auth };