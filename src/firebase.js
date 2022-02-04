import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArQFKBb0STW0PkHzNHPu5vRiE26NSLe74",
  authDomain: "disney-clone-ec6c2.firebaseapp.com",
  databaseURL: "https://disney-clone-ec6c2-default-rtdb.firebaseio.com",
  projectId: "disney-clone-ec6c2",
  storageBucket: "disney-clone-ec6c2.appspot.com",
  messagingSenderId: "376663897465",
  appId: "1:376663897465:web:8de947af088552c0892ba8"
};

// Initialize Firebase
const app =  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}