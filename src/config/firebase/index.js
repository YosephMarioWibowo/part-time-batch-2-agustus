import firebase from "firebase/app";
import "firebase/auth";
//import "firebase/firestore";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDtU6dJODpy83xq7Z2lqISYkCf-Sg74N78",
    authDomain: "parttime-batch2-af763.firebaseapp.com",
    databaseURL: "https://parttime-batch2-af763.firebaseio.com",
    projectId: "parttime-batch2-af763",
    storageBucket: "parttime-batch2-af763.appspot.com",
    messagingSenderId: "108860978535",
    appId: "1:108860978535:web:28b59bc79eb510283aabc2",
    measurementId: "G-WLT7MV6MQT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;