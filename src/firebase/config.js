import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyATFa9XdJfKjqYIcq9MhDxwh_ocstlMv3g",
    authDomain: "fir-f0f63.firebaseapp.com",
    projectId: "fir-f0f63",
    storageBucket: "fir-f0f63.appspot.com",
    messagingSenderId: "190511845427",
    appId: "1:190511845427:web:f16b2a16a80ba638165346",
    measurementId: "G-614PJ6QVK1"
  };

 export default firebase.initializeApp(firebaseConfig)