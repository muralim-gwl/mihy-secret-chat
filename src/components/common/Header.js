import React, {Component} from 'react';
import $ from 'jquery';
// var $=window.$;


class Header extends Component {

  componentDidMount()
  {
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
  }


  render() {
    return (
      <div className="navbar-fixed">
          <ul id="dropdown1" className="dropdown-content">
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Your Order</a></li>
            <li className="divider"></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
         </ul>
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo"><button style={{backgroundColor:"white",marginLeft:"5px",color:"black"}} className="waves-effect waves-light btn-large">MIHY SA</button>{/*<i className="material-icons">polymer</i>Gowma*/}</a>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">

                {/*<li><a href="#"><i className="material-icons left">search</i></a></li>*/}
                {/*<li><a href="#"><i className="material-icons left">add_shopping_cart</i>Cart<span className="new badge">0</span></a></li>*/}
                {/*<li><a className="dropdown-button" href="#" data-activates="dropdown1"><i className="material-icons left">account_box</i>Sign In<i className="material-icons right">arrow_drop_down</i></a></li>*/}
              </ul>

              <ul className="side-nav" id="mobile-demo">
                <li><a href="#"><i className="material-icons left">add_shopping_cart</i>Cart<span className="new badge">0</span></a></li>

              </ul>
            </div>
          </nav>
      </div>
    );
  }
}

export default Header;
