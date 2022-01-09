import firebase from 'firebase';

const firebaseConfig = {

  apiKey: "AIzaSyCSE4OU4COCVBQ6x6xlSI3mcg2QsVeVO9o",

  authDomain: "epsp-project-bd139.firebaseapp.com",

  databaseURL: "https://epsp-project-bd139-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "epsp-project-bd139",

  storageBucket: "epsp-project-bd139.appspot.com",

  messagingSenderId: "462560621803",

  appId: "1:462560621803:web:8c7752069aa76dcaec7aae"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;