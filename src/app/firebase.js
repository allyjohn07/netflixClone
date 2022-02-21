// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCqZqh0djUtde0IlCpNHdq3b4_iduQ3T80",
    authDomain: "netflixclone-v2.firebaseapp.com",
    projectId: "netflixclone-v2",
    storageBucket: "netflixclone-v2.appspot.com",
    messagingSenderId: "427038590909",
    appId: "1:427038590909:web:39b31a8bcaf5c366e9b4d4",
    measurementId: "G-455S80QRVC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;