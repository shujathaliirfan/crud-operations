import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, roles, ...rest }) {
    return (
        <Route {...rest} render={props => {

            let token  = localStorage.getItem('token');
            if (!token) {
                // not logged in so redirect to login page with the return url
                return <Redirect to='/login' />
            }

            // logged in so return component
            return <Component {...props} token={token}/>
        }} />
    );
}


export default PrivateRoute;