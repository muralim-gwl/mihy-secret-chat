import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/sass/materialize.scss';
// import 'jquery';
import 'materialize-css/dist/js/materialize.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './components/App';
import {HashRouter} from 'react-router-dom';




// import './styles/index.css';
// import './styles/application.css';
// import './styles/vistyle.css';
// import './styles/bootstrap.min.css';
// import './styles/jquery.dataTables.min.css';
// import './styles/buttons.dataTables.min.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();


// let themeObject={
//   palette: {
//     primary1Color: "#51bad9",
//     primary2Color: "#f58720",
//     textColor:"#5f5c62"
//   },
//   raisedButton: {
//     primaryColor: "#f58720"
//   },
//   floatingActionButton: {
//     color: "#f58720"
//   }
// };


// const muiTheme = getMuiTheme(themeObject);

ReactDOM.render(
  <Provider store={store}>
    {/*<MuiThemeProvider muiTheme={muiTheme}>*/}
      <HashRouter>
        <App />
      </HashRouter>
    {/*</MuiThemeProvider>*/}
  </Provider>, document.getElementById('root'));
  registerServiceWorker();
