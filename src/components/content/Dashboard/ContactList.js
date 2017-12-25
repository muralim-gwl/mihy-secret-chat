import React, {Component} from 'react';
import {connect} from 'react-redux';

import firebase,{firebaseRef} from '../../../firebase/';
//Custom components
import Contact from "./Contact";


class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state={
      contactList:[]
    }
  }

  componentDidMount()
  {
    let {contactList}=this.state;
    let {uid}=JSON.parse(window.localStorage.getItem("userRequest"));
    let self=this;
    firebaseRef.child("user-info/"+uid+"/contact-list").once('value', function(snapshot) {
        var object=snapshot.val();
        for (var variable in object) {
          contactList.push({userId:variable})
        }
        self.setState({contactList})
        // console.log(data);
    });
    firebaseRef.child("user-info/"+uid+"/contact-list").on('child_added', function(data) {
        console.log(data);
    });
  }

  render()
  {
    let {contactList}=this.state;
    return (
      <div>
        <div className="collection">
            {
              contactList.length>0? contactList.map((item,key)=>{
                return (<Contact key={key} contact={item}/>)
              }):"No contacts"
            }
        </div>
      </div>
    )
  }
}



const mapStateToProps = state => ({

});



const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
