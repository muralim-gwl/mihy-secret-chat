import React, {Component} from 'react';
import {connect} from 'react-redux';


class CustomName extends Component {
  constructor(props) {
    super(props);
  }

  render()
  {
    return (
      <div>
        CustomName
      </div>
    )
  }
}



const mapStateToProps = state => ({

});



const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CustomName);
