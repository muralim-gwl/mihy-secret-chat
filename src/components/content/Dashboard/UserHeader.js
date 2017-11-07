import React, {Component} from 'react';
import {connect} from 'react-redux';

import UserMenu from "./UserMenu";

import $ from 'jquery';

class UserHeader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    $(".dropdown-button").dropdown();
  }

  render()
  {
    return (
      <div>
      <UserMenu/>
      <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo"><i className="material-icons">account_circle</i>Murali</a>
            <ul className="right hide-on-med-and-down">

              <li><a className="dropdown-button" href="#!" data-activates="dropdown1"><i className="material-icons">more_vert</i></a></li>
            </ul>
          </div>
       </nav>
      </div>
    )
  }
}



const mapStateToProps = state => ({

});



const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
