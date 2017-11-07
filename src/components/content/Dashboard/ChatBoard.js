import React, {Component} from 'react';
import {connect} from 'react-redux';

import ChatArea from "./ChatArea";
import ChatBox from "./ChatBox";



class ChartBoard extends Component {
  constructor(props) {
    super(props);
  }

  render()
  {
    return (
      <div>
      <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo"><i className="material-icons">account_circle</i>Tharu</a>
            <ul className="right hide-on-med-and-down">

              {/*<li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>*/}
            </ul>
          </div>
       </nav>
        <div className="card">
              <ChatArea/>
              <ChatBox/>
        </div>
      </div>
    )
  }
}



const mapStateToProps = state => ({

});



const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChartBoard);
