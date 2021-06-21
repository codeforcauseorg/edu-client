import axios from "../utils/axios";
import firebase from "firebase/app";
import "firebase/auth";
import { cfaSignIn, cfaSignOut } from "capacitor-firebase-auth";


class AuthService{
  
  firebase = firebase;
  user = {};

  config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyAbqqXtHNIuNrsamkCxRk9sOuMO-ZWDiEk",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "codeforcauseorg.firebaseapp.com",
  };

  setAxiosInterceptors = ({ onLogout }) => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          this.removeSession();

          if (onLogout) {
            onLogout();
          }
        }

        return Promise.reject(error);
      }
    );
  };

  handleAuthentication() {
    this.firebase.initializeApp(this.config);
  }

  login = () => {
    cfaSignIn("google.com").subscribe((user)=>{
     this.setSession(user);
    });
  };

  logout = () => {
    cfaSignOut().subscribe(()=>{
     this.removeSession();
    });
    
  };
  
  
  removeSession(){
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userDataKey");
      delete axios.defaults.headers.common.Authorization;
      window.location.reload();
  }

  setSession(user){
    if (user) {
      localStorage.setItem("accessToken", user.accessToken);
      localStorage.setItem("userDataKey", JSON.stringify(user.displayName,user.photoURL,user.email));
      axios.defaults.headers.common.Authorization = `Bearer ${user.accessToken}`;
      window.location.reload();
    } 
  }

  getAccessToken = () => localStorage.getItem("accessToken");
  getUserData =()=> localStorage.getItem("userDataKey");

}

const authService = new AuthService();

export default authService;


