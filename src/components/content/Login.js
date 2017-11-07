import React, {
  Component
} from 'react';
import {connect} from 'react-redux';
import {GoogleLoginButton,FacebookLoginButton,TwitterLoginButton,GithubLoginButton} from "react-social-login-buttons";
import firebase,{googleProvider,firebaseRef} from '../../firebase/';



// var firebaseui = require('firebaseui');

class Authenticate extends Component {
  static isPrivate=false;
  constructor(props)
  {
    super(props);
    this.state={
      messages:[{
        userId:1,
        msg:"hai"
      },
      {
        userId:2,
        msg:"hai buddy"
      }]
    }
  }


  loginWithGoogleProvider =async (e) => {
    let {login}=this.props;
    firebase.auth().signInWithPopup(googleProvider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;

            var updates = {};
            updates['/user-info/' + result.user.uid] =   {
                "displayName":result.user.displayName,
                "phoneNumber":result.user.phoneNumber,
                "photoURL":result.user.photoURL,
                "email":result.user.email,
                "additionalUserInfo":result.additionalUserInfo
              };

            updates['/user-emailToUserId/'+ (result.user.email || '').split(".").join(",")]= result.user.uid

            firebaseRef.update(updates).then((res)=>{
              // firebaseRef.child('/user-emailToUserId/').child((result.user.email || '').replace(".",",")).set({"userId":result.user.uid}).then((res)=>{
                localStorage.setItem("token", result.credential.accessToken);
                localStorage.setItem("userRequest", JSON.stringify(result.user));
                login(false, result.credential.accessToken, result.user, true);
            //  })
            });


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
    let {messages}=this.state;
    return (
      <div>
      <div style={{marginTop:"5%"}} className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card-panel">
                  <h4 className="center-align flow-text">Login</h4>
                  <GoogleLoginButton onClick={(e) => loginWithGoogleProvider(e)} />
                  <FacebookLoginButton onClick={() => alert('Coming soon')} />
                  <TwitterLoginButton onClick={() => alert('Coming soon')} />
                  <GithubLoginButton onClick={() => alert('Coming soon')} />
            </div>
          </div>

      </div>

      </div>



    );
  }
}
const mapStateToProps = state => ({  credential: state.form.form, fieldErrors: state.form.fieldErrors, isFormValid: state.form.isFormValid,tenantInfo:state.common.tenantInfo});

const mapDispatchToProps = dispatch => ({
  initForm: () => {
    dispatch({
      type: "RESET_STATE",
      validationData: {
        required: {
          current: [],
          required: ["username","password"]
        }
      }
    });
  },
  handleChange: (e, property, isRequired, pattern) => {
    dispatch({type: "HANDLE_CHANGE", property, value: e.target.value, isRequired, pattern});
  },
  login: (error, token, userRequest, doNotNavigate) =>{
    let payload = {
      "access_token": token, "UserRequest": userRequest, doNotNavigate: doNotNavigate
    };
    dispatch({type: "LOGIN", error, payload})
  },
  toggleDailogAndSetText: (dailogState,msg) => {
    dispatch({type: "TOGGLE_DAILOG_AND_SET_TEXT", dailogState,msg});
  },
  toggleSnackbarAndSetText: (snackbarState, toastMsg) => {
    dispatch({type: "TOGGLE_SNACKBAR_AND_SET_TEXT", snackbarState, toastMsg});
  },
  setLoadingStatus: (loadingStatus) => {
    dispatch({type: "SET_LOADING_STATUS", loadingStatus});
  },
  setActionList:(actionList)=>{
    dispatch({type:"SET_ACTION_LIST",actionList});
  },
  setRoute: (route) => dispatch({type: "SET_ROUTE", route}),
  setHome: (showHome) => dispatch({type: "SET_HOME", showHome}),
  forceLogout: () => dispatch({type: "FORCE_LOGOUT"})
});

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);
