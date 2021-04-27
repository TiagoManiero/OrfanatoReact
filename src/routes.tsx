import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

import Landing from './pages/landing';
import OrphanagesMap from './pages/OrphanagesMap';


function Routes(){
    return(
        <Switch>
            <BrowserRouter>
                <Route path="/" exact component={Landing}></Route>
                <Route path="/app" component={OrphanagesMap}></Route>
            </BrowserRouter>
        </Switch>
    );
}


export default Routes;