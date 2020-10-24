import React from "react";
import { useSelector } from "react-redux";
import {isAuthenticatedSelector} from "../../features/auth/authSlice"
import {
  Route,
  Redirect,

} from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
    const isAuthenticated = useSelector(isAuthenticatedSelector)
    return (
      <Route
        {...rest}
        render={({ location }) =>
        isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/auth/signin",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}