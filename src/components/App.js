import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import router from './router';
import firebase from '../firebase';
var basePath=""

class App extends Component {
  componentWillReceiveProps(nextProps) {
      if (nextProps.redirectTo) {
                this.props.history.replace(nextProps.redirectTo);
            this.props.onRedirect();
      }
 }
 componentWillMount()
 {
   let {onLoad,logout}=this.props;
   firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
        // User is signed in.
        console.log(user);
     } else {
      // No user is signed in.
      localStorage.clear();
      logout();
     }
   });
 }
  render() {
    return (
      <div className="container-fluid">
        <HashRouter>
          <div>
                {router}
          </div>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    redirectTo: state.common.redirectTo,
    token:state.common.token,
    isDialogOpen: state.form.dialogOpen,
    msg: state.form.msg,
    isSnackBarOpen : state.form.snackbarOpen,
    toastMsg: state.form.toastMsg,
    loadingStatus: state.form.loadingStatus,
    isSuccess: state.form.isSuccess,
    isError: state.form.isError,
    showMenu: state.common.showMenu,
    actionList:state.common.actionList
});


const mapDispatchToProps = dispatch => ({
    onLoad: (payload, token) => dispatch({type: 'APP_LOAD', payload, token, skipTracking: true}),
    onRedirect: () => dispatch({type: 'REDIRECT'}),
    setRoute:(route)=>dispatch({type:'SET_ROUTE',route}),
    toggleDailogAndSetText: (dailogState,msg) => {
      dispatch({type: "TOGGLE_DAILOG_AND_SET_TEXT", dailogState, msg});
    },
    toggleSnackbarAndSetText: (snackbarState, toastMsg, isSuccess, isError) => {
      dispatch({type: "TOGGLE_SNACKBAR_AND_SET_TEXT", snackbarState, toastMsg, isSuccess, isError});
    },
    setLoadingStatus: (loadingStatus) => {
      dispatch({type: "SET_LOADING_STATUS", loadingStatus});
    },
    setTenantInfo:(tenantInfo)=>
    {
      dispatch({type:"SET_TENANT_INFO",tenantInfo});
    },
    setActionList:(actionList)=>{
      dispatch({type:"SET_ACTION_LIST",actionList});
    },
    logout:(tenantId)=>dispatch({type:'LOGOUT'})
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
