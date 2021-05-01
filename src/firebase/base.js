import firebase from 'firebase';


var firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID

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
//   const messaging = firebase.messaging();

// messaging.getToken({vapidKey:process.env.REACT_APP_VALIDKEY});
export default firebase;
