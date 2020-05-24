import React from 'react'
import { Router, Switch, Route } from 'react-router'

import App from './views/App.js'
import ModImmersion from './views/ModImmersion.js'
import ModTeenAdult from './views/ModTeenAdult.js'
import Login from './views/Login.js'
import Admin from './views/Admin.js'
import NotFound from './views/NotFound.js'

import PrivateRoute from './containers/PrivateRoute.js'

import { history } from './history.js'

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route component={App} exact path="/"  />
                <Route component={ModTeenAdult} exact path="/teen-and-adult"  />
                <Route component={ModImmersion} exact path="/immersion-english"  />
                <Route component={Login} exact path="/painel/admin/login"  />        
                <PrivateRoute component={Admin} exact path="/painel/admin"  />        
                <Route component={NotFound}  />            
            </Switch>
        </Router>
    )
}

export default Routes