import React, { Component } from 'react';
import {connect} from 'react-redux';
import {firebaseRef} from '../../firebase/';
import Route from "../AuthRoute";
import { Switch } from 'react-router-dom';

//ChatBoard Route
import Welcome from "./Dashboard/Welcome";
import ChatBoard  from "./Dashboard/ChatBoard";
import LeftContent  from "./Dashboard/LeftContent";


const $ = require('jquery');

const base = "";

class Dashboard extends Component {
  static isPrivate=true;
  constructor(props)
  {
    super(props);
    this.state={
      message:"",
      messages:[]
    }
  }

  componentWillReceiveProps(nextProps)
  {
    if (this.props.location.pathname!=nextProps.location.pathname) {
        this.initChat(this.props,nextProps)
    }
  }

  initChat()
  {
    
  }

  componentDidMount()
  {
    let self=this;
    let {messages}=this.state;
    // firebaseRef.child("F84vBMAd3aeTB2bck8shtLDmytN2-SFqGn9OrG5WIh6jOiv0ohSCr8jk2").on('value', function(snapshot) {
    //     let msgs=[];
    //     let object=snapshot.val();
    //     for (var variable in object) {
    //       msgs.push(object[variable]);
    //     }
    //     self.setState({messages:msgs});
    // });

  }




  render() {
    let {messages,message}=this.state;
    let {send}=this;
    let {userId}=this.props.match.params
    	return(
    			<div>
              <div className="row">
                <div className="col m4">
                    <LeftContent/>

                </div>

                <div className="col m8">
                  <div className="card">
                     {
                      !userId?<Welcome/>:<ChatBoard userId={userId}/>
                     }
                   </div>
                </div>
              </div>

          </div>
        );
      }
}



const mapStateToProps = state => ({
    currentUser: state.common.currentUser
});

// this.props.appLoaded

const mapDispatchToProps = dispatch => ({
    toggleSnackbarAndSetText: (snackbarState, toastMsg) => {
      dispatch({type: "TOGGLE_SNACKBAR_AND_SET_TEXT", snackbarState, toastMsg});
    },
    setLoadingStatus: (loadingStatus) => {
      dispatch({type: "SET_LOADING_STATUS", loadingStatus});
    },
    setRoute: (route) => dispatch({type: "SET_ROUTE", route}),

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
