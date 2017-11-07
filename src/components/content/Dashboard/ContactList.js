import React, {Component} from 'react';
import {connect} from 'react-redux';

//Custom components
import Contact from "./Contact";


class ContactList extends Component {
  constructor(props) {
    super(props);
  }

  render()
  {
    return (
      <div>
        <div className="collection">
            <Contact/>
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
