import React, {
  Component
} from 'react';
import {GoogleLoginButton,FacebookLoginButton,TwitterLoginButton,GithubLoginButton} from "react-social-login-buttons";
import firebase,{googleProvider} from '../../firebase/';
// var firebaseui = require('firebaseui');

class Authenticate extends Component {
  static isPrivate=false;
  loginWithGoogleProvider = (e) => {
    firebase.auth().signInWithPopup(googleProvider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  render() {
    let {loginWithGoogleProvider}=this;
    return (
      <div style={{marginTop:"5%"}} className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card-panel">
                  <h4 style={{textAlign:"center"}}>Login</h4>
                  <GoogleLoginButton onClick={(e) => loginWithGoogleProvider(e)} />
                  <FacebookLoginButton onClick={() => alert('Coming soon')} />
                  <TwitterLoginButton onClick={() => alert('Coming soon')} />
                  <GithubLoginButton onClick={() => alert('Coming soon')} />
            </div>
          </div>
      </div>



    );
  }
}

export default Authenticate;
