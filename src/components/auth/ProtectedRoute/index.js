import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children, ...rest }) {
  const user = useSelector((state) => state.account.user);
  return <Route {...rest} component={(props) => (user ? children : <Redirect to="/signup" />)} />;
}

export default ProtectedRoute;
