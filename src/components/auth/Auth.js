import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, setUserData } from "../../store/actions/accountActions";
import authService from "../../services/authService";

function Auth({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const initAuth = async () => {
      authService.setAxiosInterceptors({
        onLogout: () => dispatch(logout()),
      });
      authService.handleAuthentication();
      authService.firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          dispatch(setUserData(user));
        }
      });
    };
    initAuth();
  }, [dispatch]);

  return children;
}

export default Auth;
