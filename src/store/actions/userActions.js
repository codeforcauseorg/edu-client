// Action types
export const USER_ERROR = "userError";

// Action creators

export const userError = (payload) => ({
  type: USER_ERROR,
  payload: payload,
});
