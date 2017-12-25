import React, {Component} from 'react';
import {connect} from 'react-redux';

import firebase,{firebaseRef} from '../../../firebase/';

import $ from "jquery";

class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state={
      userId:"",
      msg:"",
      myRequests:[]
    }
  }

  componentDidMount()
  {
    let myRequests=[];
    let self=this;

    var uid=JSON.parse(window.localStorage.getItem("userRequest")).uid;
      $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });

    // console.log(uid);

    firebaseRef.child("user-info/"+uid+"/"+"requests").once("value").then((snapshot)=>{
      // console.log(snapshot.val());
      let object =snapshot.val();
      for (var variable in object) {
        if(object[variable].isAproved==false)
        {
          myRequests.push({...object[variable],"userId":variable});
        }
      }
      self.setState({myRequests});

    })


  }

  signOut = (e) => {
    e.preventDefault();
    let {logout}=this.props;
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      // localStorage.setItem("token","");
      // localStorage.setItem("userRequest","");
      localStorage.clear();
      logout();
    }).catch(function(error) {
      // An error happened.
      console.log(error);
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
       var name=firebase.auth().currentUser.displayName;
       if (res && res!=uid) {
            // call to check if you have already having contact
            firebaseRef.child("user-info/"+uid+"/contact-list/"+res).once("value").then((snapshotTwo)=>{
              var resTwo=snapshotTwo.val();
              if (!resTwo) {
                //call to check  if you have already sent a request or not
                firebaseRef.child("user-info/"+res+"/requests/"+uid).once("value").then((snapshotThreee)=>{
                  var resThree=snapshotThreee.val();
                  if (!resThree) {
                    var postData = {
                    "timeStamp":new Date().getTime(),
                    "isAproved":false,
                    "name":name,
                   };

                  var updates = {};
                    updates['/user-info/' + res+"/requests/"+uid] = postData;
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
  }


  accpectRequest=(e,senderId)=>{
    e.preventDefault();
    let self=this;

    var postData = {
    "timeStamp":new Date().getTime()
   };

  var updates = {};
    updates['/user-info/' + JSON.parse(window.localStorage.getItem("userRequest")).uid+"/contact-list/"+senderId] = postData;
    updates['/user-info/' + senderId+"/contact-list/"+JSON.parse(window.localStorage.getItem("userRequest")).uid] = postData;
    // updates['/user-info/' + JSON.parse(window.localStorage.getItem("userRequest")).uid+"/requests/"+senderId] = {
    //   isAproved:true
    // };


    //update the request info
    firebaseRef.update(updates).then((res)=>{
      // self.setState({msg:"Request has sent successfully"})
      firebaseRef.child('/user-info/'+ JSON.parse(window.localStorage.getItem("userRequest")).uid+'/requests/'+senderId).update({isAproved:true});

      alert("Request as accpected")
    });
  }

  render()
  {
    let {userId,msg,myRequests}=this.state;
    let  {sendRequest,signOut,accpectRequest}=this;
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
                    <button className="btn waves-effect waves-light" type="button" name="action" onClick={(e)=>{
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
          <div className="modal-footer">
            <a href="#" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>

        <div id="my-requests" className="modal bottom-sheet">
          <div className="modal-content">
            <h4>My Reqeusts</h4>
            {myRequests.length>0?
              myRequests.map((item,key)=>{
                  return (
                    <div key={key} className="row">
                        <div className="col s6">
                          {/*  <i className="material-icons prefix">account_circle</i>*/}
                            {item.name}
                        </div>
                        <div className="col s4">
                          <button className="btn waves-effect waves-light" type="button" name="action" onClick={(e)=>{
                            accpectRequest(e,item.userId);
                          }}>Accept
                            <i className="material-icons right">check</i>
                          </button>
                        </div>
                    </div>
                  )
                }):"No requests"
            }
          </div>
          <div className="modal-footer">
            <a href="#" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>



          <ul id="dropdown1" className="dropdown-content">
             <li><a className="modal-trigger" href="#send-request">Send Request</a></li>
             <li><a className="modal-trigger" href="#my-requests">My Requests</a></li>
             <li><a href="#" onClick={(e)=>{
               signOut(e)
             }}>Logout</a></li>
          </ul>
      </div>
    )
  }
}



const mapStateToProps = state => ({

});



const mapDispatchToProps = dispatch => ({
  logout:(tenantId)=>dispatch({type:'LOGOUT'})
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
