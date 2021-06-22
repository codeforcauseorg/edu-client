import authService from "../services/authService";

// Action types
export const LOGIN_REQUEST = "@account/login-request";
export const SILENT_LOGIN = "@account/silent-login";
export const LOGOUT = "@account/logout";

// Action creators
export function login() {
  authService.login();
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
  };
}

export function setUserData(user) {
  return (dispatch) =>
    dispatch({
      type: SILENT_LOGIN,
      payload: {
        user,
      },
    });
}

export function logout() {
  authService.logout();
  return async (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
}
