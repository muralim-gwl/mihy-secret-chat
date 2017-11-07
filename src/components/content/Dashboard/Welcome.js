import React, {Component} from 'react';
import {connect} from 'react-redux';


class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render()
  {
    return (
      <div>
        Welcome
      </div>
    )
  }
}



const mapStateToProps = state => ({

});



const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
