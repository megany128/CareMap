import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyBP05MQDKsrN883NrCZ9IIqcGxugdGLO0g",
    authDomain: "caremap-aa12f.firebaseapp.com",
    databaseURL: "https://caremap-aa12f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "caremap-aa12f",
    storageBucket: "caremap-aa12f.appspot.com",
    messagingSenderId: "455956599307",
    appId: "1:455956599307:web:1b6761da210cb8c266ed0e",
    measurementId: "G-WW2JCM7X5S"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();