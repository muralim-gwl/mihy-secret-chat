import React,{Component} from 'react';
import $ from "jquery";
// var $=window.$;

class Carousel extends Component {
  componentDidMount()
  {
    //  $('.carousel.carousel-slider').carousel({fullWidth: true});
     $('.slider').slider();
  }

  render()
  {
    return (
      <div className="slider">
<ul className="slides">
  <li>
    <img src="https://lorempixel.com/580/250/nature/5"/>
    <div className="caption center-align">
      <h3>Offer</h3>
      <h5 className="light grey-text text-lighten-3">Description.</h5>
    </div>
  </li>
  <li>
    <img src="https://lorempixel.com/580/250/nature/2"/>
    <div className="caption left-align">
      <h3>Left Aligned Caption</h3>
      <h5 className="light grey-text text-lighten-3">Description.</h5>
    </div>
  </li>
  <li>
    <img src="https://lorempixel.com/580/250/nature/3"/>
    <div className="caption right-align">
      <h3>Right Aligned Caption</h3>
      <h5 className="light grey-text text-lighten-3">Description.</h5>
    </div>
  </li>
  <li>
    <img src="https://lorempixel.com/580/250/nature/4"/>
    <div className="caption center-align">
      <h3>Offer</h3>
      <h5 className="light grey-text text-lighten-3">Description.</h5>
    </div>
  </li>
</ul>
</div>
    )
  }
}


export default Carousel;


// <div>
// <div className="carousel carousel-slider center" data-indicators="true">
// <div className="carousel-fixed-item center">
// <a className="btn waves-effect white grey-text darken-text-2">button</a>
// </div>
// <div className="carousel-item red white-text" href="#one!">
// <h2>First Panel</h2>
// <p className="white-text">This is your first panel</p>
// </div>
// <div className="carousel-item amber white-text" href="#two!">
// <h2>Second Panel</h2>
// <p className="white-text">This is your second panel</p>
// </div>
// <div className="carousel-item green white-text" href="#three!">
// <h2>Third Panel</h2>
// <p className="white-text">This is your third panel</p>
// </div>
// <div className="carousel-item blue white-text" href="#four!">
// <h2>Fourth Panel</h2>
// <p className="white-text">This is your fourth panel</p>
// </div>
// </div>
// </div>
