// Action types
export const USER_ERROR = "userError";
export const USER_LOADING = "userLoading";
// Action creators

export const userError = (payload) => ({
  type: USER_ERROR,
  payload: payload,
});

export const userLoading = (payload) => ({
  type: USER_LOADING,
  payload: payload,
});
