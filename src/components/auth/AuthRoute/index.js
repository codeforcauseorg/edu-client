import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { setUserData } from "../../../store/actions/accountActions";
import { getUserData } from "../../../services/authService";

function ProtectedRoute({ children, type, ...rest }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.account.user);

  useEffect(() => {
    const localData = getUserData();
    if (localData) {
      dispatch(setUserData(localData));
    }
  }, []);

  if (type === "private" && !user) return <Redirect to="/signup" />;

  if (type === "guest" && user) return <Redirect to="/home" />;

  return <Route {...rest} component={(props) => children} />;
}

export default ProtectedRoute;
