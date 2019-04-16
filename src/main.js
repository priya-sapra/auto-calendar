import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import UserForm from "./components/UserForm.vue";

import firebase from "firebase";
// Required for side-effects
require("firebase/firestore");

var config = {
  apiKey: "AIzaSyC-F4u5SEsl5EYRnG6nfGPKz5a8iFTQInM",
  authDomain: "auto-calendar-a48c3.firebaseapp.com",
  databaseURL: "https://auto-calendar-a48c3.firebaseio.com",
  projectId: "auto-calendar-a48c3",
  storageBucket: "auto-calendar-a48c3.appspot.com",
  messagingSenderId: "116933816937"
};
firebase.initializeApp(config);

// Initalize Cloud Firestore through Firebase
var db = firebase.firestore();

// Make the DB is accessible from anywhere
window.db = db;

// IDK IF I ACTUALLY NEED THIS BC IT'S NO LONGER IN BETA BUT...
// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
