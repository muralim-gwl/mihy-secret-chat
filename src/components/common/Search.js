import React,{Component} from "react";
import $ from "jquery";

// console.log(Window.$);
// var $=window.$;

class Search extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount()
  {
      // console.log(  $('input.autocomplete').length);
      $(document).ready(()=>{
          $('input.autocomplete').autocomplete({
          data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
          },
          limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
          onAutocomplete: function(val) {
            // Callback function when value is autcompleted.
          },
          minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
        });
      })

  }

  render()
  {
    return(
      <div className="row" style={{marginBottom:0}}>
          <div className="col m10 s12">
            <div className="row">
              <div className="input-field col m12 s12">
                <input type="text" id="autocomplete-input" className="autocomplete"/>
                <label htmlFor="autocomplete-input">Search a product</label>
              </div>
            </div>
          </div>
          <div className="col m2 s12">
            <button style={{marginTop:"10px"}} className="waves-effect waves-light btn-large"><i className="material-icons right">search</i>Search</button>
          </div>
      </div>
    )
  }
}


export default Search;
