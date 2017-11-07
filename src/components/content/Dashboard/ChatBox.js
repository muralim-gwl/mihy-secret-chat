import React, {Component} from 'react';
import {connect} from 'react-redux';


class ChatBox extends Component {
  constructor(props) {
    super(props);
  }

  render()
  {
    return (
      <div className="card">
        <div className="row">
          <div className="input-field col m10 s10">
            <input type="text" className="validate" placeholder="Type a message"/>
          </div>
          <div className="col m2 s2">
               <a className="btn-floating btn-large waves-effect waves-light teal"><i className="material-icons right">send</i> </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
