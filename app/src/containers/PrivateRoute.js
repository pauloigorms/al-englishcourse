import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogged } from './../services/api'

const PrivateRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route {...rest} render={props => (
                isLogged() ? <Component {...props} /> : <Redirect to="/painel/admin/login" />
            )}
        />
    )
}

export default PrivateRoute