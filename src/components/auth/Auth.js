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
        dispatch(setUserData(user));
        if (user) {
          const accessToken = await user.getIdToken();
          authService.setSession(accessToken);
        }
      });
    };
    initAuth();
  }, [dispatch]);

  return children;
}

export default Auth;
