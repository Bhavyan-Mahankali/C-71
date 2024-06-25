import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDcyhvv3rPnSYYCJ7-RQrvjkT5nLOuIV2Y",
    authDomain: "project-71-f2292.firebaseapp.com",
    projectId: "project-71-f2292",
    storageBucket: "project-71-f2292.appspot.com",
    messagingSenderId: "683273932417",
    appId: "1:683273932417:web:cfdd767a998745bdcf4780",
    measurementId: "G-6B2LP32C1M"
  };
  

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
