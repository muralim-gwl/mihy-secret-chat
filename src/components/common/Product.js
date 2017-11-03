import React,{Component} from 'react';

class Product extends Component{
  render()
  {

    return(


      <div className="card">
          <div className="card-image">
            <img src="https://lorempixel.com/580/250/nature/3"/>
            <span className="card-title">Card Title</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
          </div>
          <div className="card-content">
            <span>Reebok TREAD FAST Running Shoes</span>
            <br/>
            <span className="new badge left">4.6</span> <nbsp/>
             <h6 className="text-subhead">1,176</h6>
             <span>2670</span> <nspn/>
             <span className="green-text text-darken-3">40% off</span> <br/>
             <span className="green-text text-darken-3">Offers</span> <nbsp/>
             <span>No Cost EMI & 1 More</span>
          </div>
     </div>



    )
  }
}

export default Product;
