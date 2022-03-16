import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('authData') ? (
          <Redirect to="/" />
        ) : (
            <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;


/*pst  -1:30  hr
  est  +1:30  hr*/