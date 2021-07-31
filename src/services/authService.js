import axios from "../utils/axios";
import firebase from "firebase/app";
import "firebase/auth";
import { cfaSignIn, cfaSignOut } from "capacitor-firebase-auth";
import {login,logout} from "../store/actions/accountActions"

class AuthService{
  
  firebase = firebase;
  user = {};

  config = {
    apiKey: "AIzaSyCtj9qDUcjl8M6H4usKBoJerbCxn3Of-pA",
    authDomain: "keenwpractice.firebaseapp.com",
    projectId: "keenwpractice",
    storageBucket: "keenwpractice.appspot.com",
    messagingSenderId: "981171596013",
    appId: "1:981171596013:web:822e67c6a1b3b1d8f13ae4",
    measurementId: "G-MNRB0XL6QD"    // ...
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
    return  (dispatch)=>{
      dispatch(login())
      cfaSignIn("google.com").subscribe((user)=>{
       this.setuserData(user.displayName,user.email,user.photoURL);
       
      });
    }
   
  };

  logout = () => {
    return (dispatch)=>{
      dispatch(logout())
      cfaSignOut().subscribe(()=>{
       this.removeSession();
      });
    }
   
    
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


