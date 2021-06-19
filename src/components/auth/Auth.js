import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, setUserData } from "../../actions/accountActions";
import authService from "../../services/authService";
import { useHistory } from "react-router";

function Auth({ children }) {
  const dispatch = useDispatch();
  const history = useHistory();

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
          history.push("/home");
        }
      });
    };
    initAuth();
  }, [dispatch]);

  return children;
}

export default Auth;
