import jwtDecode from "jwt-decode";
import axios from "../utils/axios";

import firebase from "firebase/app";
import "firebase/auth";
import { cfaSignIn, cfaSignOut } from "capacitor-firebase-auth";

class AuthService {
  // Configure Firebase.
  config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyAbqqXtHNIuNrsamkCxRk9sOuMO-ZWDiEk",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "codeforcauseorg.firebaseapp.com",
    // ...
  };

  firebase = firebase;

  user = {};

  setAxiosInterceptors = ({ onLogout }) => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          this.setSession(null);

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

  loadUserProfile() {
    return new Promise((resolve) => {
      this.keycloak
        .loadUserProfile()
        .then((profile) => {
          resolve(profile);
        })
        .catch(function () {
          alert("Failed to load user profile");
        });
    });
  }

  login = () => {
    cfaSignIn("google.com").subscribe();
  };

  logout = () => {
    cfaSignOut().subscribe();
    this.setSession(null);
  };

  setSession = (accessToken) => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem("accessToken");
      delete axios.defaults.headers.common.Authorization;
    }
  };

  getAccessToken = () => localStorage.getItem("accessToken");

  isValidToken = (accessToken) => {
    if (!accessToken) {
      return false;
    }

    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  };
}

const authService = new AuthService();

export default authService;
