// For Firebase JS SDK v7.20.0 and later, measurement;
import firebase from 'firebase/app';
import 'firebase/firestore';
import '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBcFlXrVnP268SIzjO-WZUFesOtwPVoziA",
    authDomain: "whatsapp-firebase-1f4e1.firebaseapp.com",
    databaseURL: "https://whatsapp-firebase-1f4e1.firebaseio.com",
    projectId: "whatsapp-firebase-1f4e1",
    storageBucket: "whatsapp-firebase-1f4e1.appspot.com",
    messagingSenderId: "132937384042",
    appId: "1:132937384042:web:79a2d92ab2ea9e07830a13",
    measurementId: "G-GPKP0G4R95"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;