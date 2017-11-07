import React, {Component} from 'react';
import {connect} from 'react-redux';

import firebase,{firebaseRef} from '../../../firebase/';

import $ from "jquery";

class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state={
      userId:"",
      msg:""
    }
  }

  componentDidMount()
  {
      $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
  }

  sendRequest=(e)=>{
    e.preventDefault();
    let self=this;
    let {userId}=this.state;
    console.log(userId);
    //call to check if emai id there or not
    firebaseRef.child("user-emailToUserId/"+(userId || '').split(".").join(",")).once('value').then(function(snapshot) {
       var res=snapshot.val();
       var uid=firebase.auth().currentUser.uid;
       if (res && res!=uid) {
            // call to check if you have already having contact
            firebaseRef.child("user-info/"+uid+"/contact-list/"+res).once("value").then((snapshotTwo)=>{
              var resTwo=snapshotTwo.val();
              if (!resTwo) {
                //call to check  if you have already sent a request or not
                firebaseRef.child("user-info/"+res+"/requests").orderByChild("userId").equalTo(uid).once("value").then((snapshotThreee)=>{
                  var resThree=snapshotThreee.val();
                  if (!resThree) {
                    var postData = {
                    "userId":uid,
                    "timeStamp":new Date().getTime(),
                    "isAproved":false,
                   };

                   // Get a key for a new Post.
                   var newPostKey = firebaseRef.child('/user-info/' + res+"/requests/").push().key;

                    var updates = {};
                    updates['/user-info/' + res+"/requests/"+newPostKey] = postData;
                    //update the request info
                    firebaseRef.update(updates).then((res)=>{
                      self.setState({msg:"Request has sent successfully"})
                    });
                  } else {
                      self.setState({msg:"You already sent a request"});
                  }
                })
              }
              else {
                self.setState({msg:"You have connected to this person"});
              }

            }).catch((error)=>{
              console.log(error);
            })

       } else {
         self.setState({msg:"User id not found or You have given current logged in userId"})
       }

    }).catch((error)=>{
      console.log(error);
    });


    // ref.orderByChild("email").equalTo("userId").on("child_added", function(snapshot) {
    //     console.log(snapshot.key);
    // })
    //
    // firebase.auth().fetchProvidersForEmail(userId)
    //   .then(providers => {
    //     if (providers.length === 0) {
    //       // this email hasn't signed up yet
    //       self.setState({msg:"User id not found"})
    //     } else {
    //       // has signed up
    //       console.log(firebase.auth().currentUser.uid);
    //
    //       var postData = {
    //         "userId":firebase.auth().currentUser.uid,
    //         "timeStamp":new Date().getTime(),
    //         "isAproved":false,
    //       };
    //
    //       // // Get a key for a new Post.
    //       // var newPostKey = firebaseRef.child('/user-info/' + postData.userId+"/requests/").push().key;
    //       //
    //       //   var updates = {};
    //       //   updates['/user-info/' + postData.userId+"/requests/"+newPostKey] = postData;
    //       //
    //       //   firebaseRef.update(updates).then((res)=>{
    //       //     self.setState({msg:"Request has sent successfully"})
    //       //   });
    //
    //     }
    //   });
  }

  render()
  {
    let {userId,msg}=this.state;
    let  {sendRequest}=this;
    let self=this;
    return (
      <div>
        <div id="send-request" className="modal bottom-sheet">
          <div className="modal-content">
            <h4>Send Request</h4>
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input value={userId} onChange={
                      (e)=>{
                        self.setState({
                          userId:e.target.value
                        })
                      }
                    } id="icon_prefix" type="text" className="validate"/>
                    <label htmlFor="icon_prefix">user id</label>
                  </div>
                  <div className="input-field col s4">
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={(e)=>{
                      sendRequest(e)
                    }}>Send
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {<span className={msg=="Request has sent successfully"?"teal":"red"}>{msg}</span>}
          </div>
          {/*<div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>*/}
        </div>

        <div id="my-requests" className="modal bottom-sheet">
          <div className="modal-content">
            <h4>My Reqeusts</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>



          <ul id="dropdown1" className="dropdown-content">
             <li><a className="modal-trigger" href="#send-request">Send Request</a></li>
             <li><a className="modal-trigger" href="#my-requests">My Requests</a></li>
          </ul>
      </div>
    )
  }
}



const mapStateToProps = state => ({

});



const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
