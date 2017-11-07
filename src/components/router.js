import React from 'react';
import {Switch} from 'react-router-dom';
import Route from "./AuthRoute";
import Login from './content/Login';
import Dashboard from './content/Dashboard';



const base = "";

const Main = () => {
    return (
      <main style={{"marginBottom": "50px"}}>
        <Switch>
          <Route exact path={base+"/"} component={Login} />
          <Route exact path={base+"/dashboard/:userId?"} component={Dashboard} />
        </Switch>
      </main>
     )
   }

export default(
     <Main/>
   );
