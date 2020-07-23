import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCi7YpCqUCQweJ8zyWuAW-x3QjUanB9zP8",
    authDomain: "vuefirebasepractice.firebaseapp.com",
    databaseURL: "https://vuefirebasepractice.firebaseio.com",
    projectId: "vuefirebasepractice",
    storageBucket: "vuefirebasepractice.appspot.com",
    messagingSenderId: "1090255765712",
    appId: "1:1090255765712:web:7a23056c5f96324d795ed5",
    measurementId: "G-BMQZXDJQFT"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();