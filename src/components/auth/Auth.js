import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAxiosInterceptors } from "../../services/authService";
import { logout, setUserData } from "../../store/actions/accountActions";
import { firebaseAuth } from "../../firebase";

function Auth({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const initAuth = async () => {
      setAxiosInterceptors({
        onLogout: () => dispatch(logout()),
      });
      firebaseAuth.onAuthStateChanged(async (user) => {
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
