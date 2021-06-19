import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const user = useSelector((state) => state.account.user);
  return (
    <Route
      {...rest}
      component={(props) => (user ? <Component {...props} /> : <Redirect to="/signup" />)}
    />
  );
}

export default ProtectedRoute;
