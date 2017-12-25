import React, {Component} from 'react';
import {connect} from 'react-redux';

import firebase,{firebaseRef} from '../../../firebase/';

import {Link} from "react-router-dom";

import _ from 'lodash';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state={
      contact:{}
    }
  }

  

  componentDidMount()
  {
   let {contact}=this.props;
   let self=this;
   firebaseRef.child("/user-info/"+contact.userId+"/displayName").once("value",(snapshot)=>{
     //  console.log(snapshot.val());
     let res=snapshot.val();
     self.setState({contact:{
       name:res,
       userId:contact.userId
     }})
   })


  }

  render()
  {
    let {contact}=this.state;
    return (
      <div>
        <Link to={"/dashboard/"+contact.userId} className="collection-item"><i className="material-icons">account_circle</i><strong>{!_.isEmpty(contact) && contact.name}</strong> </Link>
      </div>
    )
  }
}



const mapStateToProps = state => ({

});



const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
