import React,{Component} from 'react';
import Brand from '../../common/Brand';

let items=[1,2,3,4];
class Brands extends Component{
  render()
  {

    return(
      <div className="card">
       <span className="card-title">Trending Brands</span>
       <div className="card-content">
        <div className="row">
          {items.map((item,key)=>{
            return (<div key={key} className="col s12 m3">
                        <Brand/>
                   </div>)
          })}
        </div>



      </div>


      </div>


    )
  }
}

export default Brands;
