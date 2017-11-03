import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyCIeoCju_5dLvsYKWYLgLL1R7kInqC62gE",
      authDomain: "mihy-secret-chat.firebaseapp.com",
      databaseURL: "https://mihy-secret-chat.firebaseio.com",
      projectId: "mihy-secret-chat",
      storageBucket: "mihy-secret-chat.appspot.com",
      messagingSenderId: "645185045669"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var googleProvider = new firebase.auth.GoogleAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
