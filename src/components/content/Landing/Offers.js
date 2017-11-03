import React,{Component} from 'react';
import Offer from '../../common/Offer';

let items=[1,2,3,4,5,6];
class Offers extends Component{
  render()
  {

    return(
      <div className="card">
       <span className="card-title">Trending Offers</span>
       <div className="card-content">
        <div className="row">
          {items.map((item,key)=>{
            return (<div key={key} className="col s12 m2">
                        <Offer/>
                   </div>)
          })}
        </div>



      </div>


      </div>


    )
  }
}

export default Offers;
