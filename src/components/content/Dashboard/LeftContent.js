import React, {Component} from 'react';
import {connect} from 'react-redux';

import $ from 'jquery';

//Custom components
import ContactList from "./ContactList";

import UserHeader from "./UserHeader";


 class LeftContent extends Component {
   constructor(props) {
     super(props);
   }



   render()
   {
     return (
       <div>
         <div className="card">
           <UserHeader/>
           <ContactList/>
          </div>
       </div>
     )
   }
 }



 const mapStateToProps = state => ({

 });



 const mapDispatchToProps = dispatch => ({

 });

 export default connect(mapStateToProps, mapDispatchToProps)(LeftContent);
