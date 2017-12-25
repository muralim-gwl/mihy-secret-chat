
import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import $ from "jquery";
// import * as actions from '../actions';

// import Header from './common/Header';
// import Landing from './content/Landing';
// import Footer from './common/Footer';

// import ViewProdcut from './content/ViewProduct';
// import ViewProdcuts from './content/ViewProducts';
// import MyCarts from './content/myCarts/MyCarts';
import { withRouter } from 'react-router';
import router from './router';

import firebase from '../firebase';



// import Dashboard from './Dashboard';
// import SurveyNew from './surveys/SurveyNew';
var basePath=""

class App extends Component {
  componentWillReceiveProps(nextProps) {
      if (nextProps.redirectTo) {
            // console.log("Login");
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
        // onLoad(user,user)
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
            {/*<Header />*/}

                {router}

                {/*
                <Route exact path={basePath+"/view-product"} component={ViewProdcut} />
                <Route exact path={basePath+"/view-products"} component={ViewProdcuts} />
                <Route exact path={basePath+"/my-carts"} component={MyCarts} />
                <Route exact path={basePath+"/login"} component={Login} />*/}


            {/*  <br/>
            <Footer/>*/}
          </div>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    // labels: state.labels,
    // appLoaded: state.common.appLoaded,
    // appName: state.common.appName,
    // currentUser: state.common.currentUser,
    // route:state.common.route,
    redirectTo: state.common.redirectTo,
    token:state.common.token,
    // pleaseWait: state.common.pleaseWait,
    // token:state.common.token,
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

// this.props.appLoaded

const mapDispatchToProps = dispatch => ({
    onLoad: (payload, token) => dispatch({type: 'APP_LOAD', payload, token, skipTracking: true}),
    onRedirect: () => dispatch({type: 'REDIRECT'}),
    setRoute:(route)=>dispatch({type:'SET_ROUTE',route}),
    // setLabels: payload => dispatch({type: 'LABELS', payload}),
    // onUpdateAuth: (value, key) => dispatch({type: 'UPDATE_FIELD_AUTH', key, value}),
    // onLogin: (username, password) => {
    //     dispatch({
    //         type: 'LOGIN',
    //         payload: []//agent.Auth.login(username, password)
    //     })
    // },
    // updateError: (error) =>
    //     dispatch({
    //         type: 'UPDATE_ERROR',
    //         error
    //     }),
    // setPleaseWait: (pleaseWait) =>
    //     dispatch({
    //         type: 'PLEASE_WAIT',
    //         pleaseWait
    //     }),
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
// export default connect(null, actions)(App);
