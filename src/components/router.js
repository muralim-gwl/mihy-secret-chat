import React from 'react';
import {Switch} from 'react-router-dom';
import Route from "./AuthRoute";
import Login from './content/Login';


const base = "";

const Main = () => {
    return (
      <main style={{"marginBottom": "50px"}}>
        <Switch>
          <Route exact path={base+"/"} component={Login} />
        </Switch>
      </main>
     )
   }

export default(
     <Main/>
   );
