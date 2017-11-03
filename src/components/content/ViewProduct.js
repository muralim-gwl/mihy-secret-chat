import React,{Component} from 'react';


class ViewProduct extends Component {


  render() {
    return (
      <div className="row">
        <div className="col s5">
          <div className="row"><img src="https://lorempixel.com/500/250/nature/3"/></div>
           <div className="row">
              <div className="col s6">
               <a className="waves-effect waves-light btn-large">
                     <i className="material-icons left">add_shopping_cart</i>ADD TO CART</a>
              </div>
              <div className="col s6">
               <a className="waves-effect waves-light btn-large">BUY NOW
                  <i className="material-icons left">flash_on</i>
               </a>
              </div>
          </div>
        </div>
        <div className="col s7">
        <div className="row">
          <nav>
           <div className="nav-wrapper">
           <div className="col s8">
             <a href="#!" className="breadcrumb">first</a>
             <a href="#!" className="breadcrumb">second</a>
             <a href="#!" className="breadcrumb">third</a>
             <a href="#!" className="breadcrumb">fourth</a>
             <a href="#!" className="breadcrumb">fifth</a>
           </div>
               </div>
          </nav>
        </div>
        <h5>Headding h5..</h5>
        <span className="new badge left">4.6</span>
        <br/>
        <h3>455 <small>855</small></h3>

          <i className="material-icons">local_offer </i>
          <blackquotes>no cost emi</blackquotes>
          <br/>
          <i className="material-icons">local_offer </i>
          <blackquotes>no cost emi</blackquotes>
<br/>
<br/>
 <div className="row">
  <div className="col s2">size</div>
  <div className="col s8">
   <div className="row">
    <div className="col s2"><a className="waves-effect waves-effect btn-large">M</a></div>
    <div className="col s2"><a className="waves-effect waves-effect btn-large">L</a></div>
    <div className="col s2"><a className="waves-effect waves-effect btn-large">XL</a></div>
  </div>
  </div>
 </div>

 <table>
  <thead>
   <tr>
     <th><h5>Specifications</h5></th>
   </tr>
  </thead>

<tbody>
   <tr>
    <td>pack of</td>
    <td>MS17T0198</td>
  </tr>

  <tr>
    <td>Style Code</td>
   <td>Henley</td>
 </tr>

 <tr>
  <td>Neck Type</td>
  <td>Mens</td>
 </tr>

 <tr>
  <td>Ideal For</td>
  <td>L</td>
 </tr>

</tbody>

 </table>



        </div>

      </div>
    );
  }
}

export default ViewProduct;
