import React from "react";
import { Route, Redirect } from "react-router-dom";
import authService from "../../../services/authService";

function ProtectedRoute({ children, type, ...rest }) {
  const user = authService.getUserData();

  if (type === "guest" && user) return <Redirect to="/home" />;
  else if (type === "private" && !user) return <Redirect to="/signup" />;

  return <Route {...rest} component={(props) => children} />;
}

export default ProtectedRoute;
