import React, {Component} from 'react';
import {connect} from 'react-redux';


class ChatArea extends Component {
  constructor(props) {
    super(props);
  }

  render()
  {
    return (
      <div>
        <div className="row">
            <div className="col s6">
            <div className="card-panel teal">
              <span className="white-text flow-text">
                Hi Tharu <br/>
                <span>8:20 PM </span>
              </span>
            </div>
            </div>
        </div>

        <div className="row">
            <div className="col s6 offset-s6">
            <div className="card-panel flow-text">
                Hi mimmi <br/>
                <span>8:20 PM </span>

            </div>
            </div>
        </div>



      </div>
    )
  }
}



const mapStateToProps = state => ({

});



const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);
