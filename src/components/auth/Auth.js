import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { logout, setUserData } from "../../actions/accountActions";
import authService from "../../services/authService";
//  import Login from "./Login";
import LandingPage from "../../pages/LandingPage";

function Auth({ children }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.account.user);

  useEffect(() => {
    const initAuth = async () => {
      authService.setAxiosInterceptors({
        onLogout: () => dispatch(logout()),
      });

      authService.handleAuthentication();

      authService.firebase.auth().onAuthStateChanged((user) => {
        dispatch(setUserData(user));
        if (user) {
          user.getIdToken().then((token) => {
            authService.setSession(token);
          });
        }
      });
    };
    initAuth();
  }, [dispatch]);

  return user ? children : <LandingPage />;
}

Auth.propTypes = {
  children: PropTypes.any,
};

export default Auth;
