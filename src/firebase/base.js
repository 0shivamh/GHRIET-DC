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
  const messaging = firebase.messaging();
  // Add the public key generated from the console here.
messaging.getToken({vapidKey: "AAAAFMcZhcY:APA91bG8NFMeHWe5wOF4Ln39Qr8XkWc88sHZj7i8Vt1PFflc2tg9wyu8kpsXy6awp3eOzhegoxi4e84pDpJIafighcRqUgrUqYVG31zDE2T4j1mIb7TXUzYQlNE1RNzxbxOGlGot70ZJ"});

  export default firebase;
