import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { logout, setUserData } from "../../actions/accountActions";
import authService from "../../services/authService";

function Auth({ children }) {
  const dispatch = useDispatch();

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

  return children;
}

Auth.propTypes = {
  children: PropTypes.any,
};

export default Auth;
