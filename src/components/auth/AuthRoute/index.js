import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { setUserData } from "../../../store/actions/accountActions";
import authService from "../../../services/authService";

function ProtectedRoute({ children, type, ...rest }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.account.user);

  useEffect(() => {
    const localData = authService.getUserData();
    if (localData) {
      dispatch(setUserData(localData));
    }
  }, []);

  if (type === "guest" && user) return <Redirect to="/home" />;
  else if (type === "private" && !user) return <Redirect to="/signup" />;

  return <Route {...rest} component={(props) => children} />;
}

export default ProtectedRoute;
