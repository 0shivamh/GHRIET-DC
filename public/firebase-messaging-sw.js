// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({ vapidKey: 'AAAAFMcZhcY:APA91bG8NFMeHWe5wOF4Ln39Qr8XkWc88sHZj7i8Vt1PFflc2tg9wyu8kpsXy6awp3eOzhegoxi4e84pDpJIafighcRqUgrUqYVG31zDE2T4j1mIb7TXUzYQlNE1RNzxbxOGlGot70ZJ' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});