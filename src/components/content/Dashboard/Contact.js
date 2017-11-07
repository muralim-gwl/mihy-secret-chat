import React, {Component} from 'react';
import {connect} from 'react-redux';


class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render()
  {
    return (
      <div>
        <a href="#!" className="collection-item"><i className="material-icons">account_circle</i><strong>Alan</strong></a>
      </div>
    )
  }
}



const mapStateToProps = state => ({

});



const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
