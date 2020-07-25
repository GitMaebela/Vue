import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJtyBGoi4Inz7N6HQ-qeOugoIOTnRBN14",
    authDomain: "vue-firebase-setup-bbab7.firebaseapp.com",
    databaseURL: "https://vue-firebase-setup-bbab7.firebaseio.com",
    projectId: "vue-firebase-setup-bbab7",
    storageBucket: "vue-firebase-setup-bbab7.appspot.com",
    messagingSenderId: "585199771414",
    appId: "1:585199771414:web:b3904933fa54a3b56f3a37",
    measurementId: "G-KDJ6WZKWC7"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();