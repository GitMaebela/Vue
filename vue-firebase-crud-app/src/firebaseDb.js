import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBdTpd76GaHvGFCQu9i1PNOb9CcRNQTlGw",
    authDomain: "vue-crud-3e98a.firebaseapp.com",
    databaseURL: "https://vue-crud-3e98a.firebaseio.com",
    projectId: "vue-crud-3e98a",
    storageBucket: "vue-crud-3e98a.appspot.com",
    messagingSenderId: "344783589075",
    appId: "1:344783589075:web:97e57a4cfb238077a08e26",
    measurementId: "G-G9RQS8MHFB"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();