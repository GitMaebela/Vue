import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase';

import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/css/main.css'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAhrox0tDUa21477edUQE6t80NQMiw7xOE",
  authDomain: "vue-firebase-auth-3b2a5.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-3b2a5.firebaseio.com",
  projectId: "vue-firebase-auth-3b2a5",
  storageBucket: "vue-firebase-auth-3b2a5.appspot.com",
  messagingSenderId: "228434291846",
  appId: "1:228434291846:web:d6afcade85772a17f2f507",
  measurementId: "G-S7K7H9HF9C"
}

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
