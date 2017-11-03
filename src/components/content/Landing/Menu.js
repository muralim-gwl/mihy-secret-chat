import React,{Component} from 'react';

class Menu extends Component{
  render()
  {
    return(
      <div>


            <ul className="collection with-header">
                  <li className="collection-header"><h5>Categoies</h5></li>
                  <li className="collection-item avatar">
                   <i className="material-icons circle red">play_arrow</i>
                    <span className="title">Title</span>
                    <p>First Line <br/>
                       Second Line
                    </p>
                    <a href="#!" className="secondary-content"><i className="material-icons">apps</i></a>
                  </li>
                  <li className="collection-item avatar">
                    <i className="material-icons circle">folder</i>
                    <span className="title">Title</span>
                    <p>First Line <br/>
                       Second Line
                    </p>
                    <a href="#!" className="secondary-content"><i className="material-icons">apps</i></a>
                  </li>
                  <li className="collection-item avatar">
                    <i className="material-icons circle green">insert_chart</i>
                    <span className="title">Title</span>
                    <p>First Line <br/>
                       Second Line
                    </p>
                    <a href="#!" className="secondary-content"><i className="material-icons">apps</i></a>
                  </li>

                  <li className="collection-item avatar">
                    <i className="material-icons circle red">play_arrow</i>
                    <span className="title">More</span>
                    <a href="#!" className="secondary-content"><i className="material-icons">apps</i></a>
                  </li>
                </ul>
          </div>


    )
  }
}

export default Menu;
