import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA9bkol6af0Wz-ozhS78n2TOs3LNya8xGg",
  authDomain: "chat-group-18857.firebaseapp.com",
  databaseURL: "https://chat-group-18857.firebaseio.com",
  projectId: "chat-group-18857",
  storageBucket: "chat-group-18857.appspot.com",
  messagingSenderId: "660645655047"
};

firebase.initializeApp(config);

const database = firebase.database();
const authProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, authProvider, database as default };
