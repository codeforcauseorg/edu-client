import axios from "../utils/axios";
import { cfaSignIn, cfaSignOut } from "capacitor-firebase-auth";
import {login,logout} from "../store/actions/accountActions"
import {firebaseAuth} from "../firebase"


 export const  setAxiosInterceptors = ({ onLogout }) => {
    axios.interceptors.request.use(async(request)=>{
      if(firebaseAuth.currentUser){
        const accessToken = await firebaseAuth.currentUser.getIdToken();
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
          removeSession();

          if (onLogout) {
            onLogout();
          }
        }
        return Promise.reject(error);
      }
    );
  };



  export const  loginAction = () => {
    return  (dispatch)=>{
      dispatch(login())
      cfaSignIn("google.com").subscribe((user)=>{
       setuserData(user.displayName,user.email,user.photoURL);
       user.sendEmailVerification();
      });
    }
   
  };

  export const  logoutAction = () => {
    return (dispatch)=>{
      dispatch(logout())
      cfaSignOut().subscribe(()=>{
       removeSession();
      });
    }
   
    
  };
  
  
  export const  removeSession=()=>{
      localStorage.removeItem("userDataKey");
  }

  export const  setuserData=(displayName,email,photoURL)=>{
      localStorage.setItem("userDataKey", JSON.stringify({displayName,email,photoURL}));
  }


  export const  getUserData =()=>{
     const data =  localStorage.getItem("userDataKey");
    return JSON.parse(data);
  } 


