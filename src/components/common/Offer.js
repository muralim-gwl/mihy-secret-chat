import React,{Component} from 'react';

class Offer extends Component{
  render()
  {

    return(


      <div className="card">
          <div className="card-image">
            <img src="https://lorempixel.com/580/250/nature/3"/>
            <span className="card-title">Card Title</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">pageview</i></a>
          </div>
          <div className="card-content">
            <h6>Cloths</h6>
            <span className="green-text text-darken-2"> Exchange Offer</span>
            <br/>
            <span>Door and Windows</span>
          </div>
     </div>



    )
  }
}

export default Offer;
