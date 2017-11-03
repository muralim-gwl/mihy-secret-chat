import React,{Component} from 'react';
import Products from '../common/Products';


class ViewProducts extends Component {


  render() {
    return (
      <div className="row">
         <div className="col s3 m2 l2 z-depth-3" ><h5>Filter</h5>


         <h6>Price</h6>
         <div className="progress">
           <div className="determinate" style={{width: "70%"}}></div>
         </div>


        <div className="row">
          <div className="col s6 m3 l3">Tharu</div>
          <div className="col s6 m3 l3">tharu</div>
        </div>

        <h6>BRAND</h6>

          <form action="#">
      <p>
        <input type="checkbox" id="test1" />
        <label for="test1">Red</label>
      </p>
      <p>
        <input type="checkbox" id="test2"/>
        <label for="test2">Yellow</label>
      </p>
      <p>
        <input type="checkbox" id="test3" />
        <label for="test3">Red</label>
      </p>
      <p>
        <input type="checkbox" id="test4"/>
        <label for="test4">Yellow</label>
      </p>
       <p>
          <input type="checkbox" id="test5" />
          <label for="test5">Red</label>
        </p>
        <p>
          <input type="checkbox" id="test6"/>
          <label for="test6">Yellow</label>
        </p>
    </form>
    <br/>

    <h6>DISCOUNT</h6>

    <form action="#">
<p>
  <input type="checkbox" id="test7" />
  <label for="test7">60%</label>
</p>
<p>
  <input type="checkbox" id="test8"/>
  <label for="test8">50%</label>
</p>
<p>
  <input type="checkbox" id="test9" />
  <label for="test9">40%</label>
</p>
<p>
  <input type="checkbox" id="test10"/>
  <label for="test10">20%</label>
</p>
 <p>
    <input type="checkbox" id="test11" />
    <label for="test11">10%</label>
  </p>
  <p>
    <input type="checkbox" id="test12"/>
    <label for="test12">5%</label>
  </p>
</form>

        

         </div>


        <div className="col s9 m10 l10 z-depth-3">
        <nav>
          <div className="nav-wrapper">
     <div className="col s12">
       <a href="#!" className="breadcrumb">First</a>
       <a href="#!" className="breadcrumb">Second</a>
       <a href="#!" className="breadcrumb">Third</a>
       <a href="#!" className="breadcrumb">Third</a>
       <a href="#!" className="breadcrumb">Third</a>
       <a href="#!" className="breadcrumb">Third</a>
     </div>
          </div>
       </nav>
<h6>Mens Footwear</h6>

  <div className="row">
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s3"><a href="#Popularity">Popularity</a></li>
          <li className="tab col s3"><a className="active" href="#Price -- Low to High">Price -- Low to High</a></li>
          <li className="tab col s3"><a href="#Price -- High to Low">Price -- High to Low</a></li>
          <li className="tab col s3"><a href="#Newest First">Newest First</a></li>
        </ul>
      </div>
  </div>

  <div className="row">
    <Products/>
</div>

<div className="row">
  <Products/>
</div>

<div className="row">
  <Products/>
</div>


</div>



      </div>
    );
  }
}

export default ViewProducts;
