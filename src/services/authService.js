import axios from "../utils/axios";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
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
    axios.interceptors.request.use(async(request)=>{
      if(firebase.auth().currentUser){
        const accessToken = await firebase.auth().currentUser.getIdToken();
        request.headers.Authorization =  accessToken;
        return request
      }
      return request
    })
    axios.interceptors.response.use((response) => {
    return response
  },
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

  storage = firebase.storage()

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
      localStorage.removeItem("userDataKey");
  }

  setuserData(displayName,email,photoURL){
      localStorage.setItem("userDataKey", JSON.stringify({displayName,email,photoURL}));
  }


  getUserData (){
     const data =  localStorage.getItem("userDataKey");
    return JSON.parse(data);
  } 
}

const authService = new AuthService();

export default authService;


