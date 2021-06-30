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
     this.setuserData(user.displayName,user.email,user.photoURL);
    });
  };

  logout = () => {
    cfaSignOut().subscribe(()=>{
     this.removeSession();
    });
    
  };
  
  
  removeSession(){
      localStorage.removeItem("cfcAccessToken");
      localStorage.removeItem("userDataKey");
      delete axios.defaults.headers.common.Authorization;
  }

  setuserData(displayName,email,photoURL){
      localStorage.setItem("userDataKey", JSON.stringify({displayName,email,photoURL}));
  }

  setSession(accessToken){
    localStorage.setItem("cfcAccessToken",accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  getAccessToken = () => localStorage.getItem("cfcAccessToken");
  getUserData (){
     const data =  localStorage.getItem("userDataKey");
    return JSON.parse(data);
  } 
}

const authService = new AuthService();

export default authService;


