import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCiI_2JeGwA9X_FMdN0r6uZhEZq6sHfKG4",
    authDomain: "dev-fellow.firebaseapp.com",
    projectId: "dev-fellow",
    storageBucket: "dev-fellow.appspot.com",
    messagingSenderId: "89239684550",
    appId: "1:89239684550:web:f73703db08595837c09ec7",
    measurementId: "G-XS7BQEEEQL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default firebase;
