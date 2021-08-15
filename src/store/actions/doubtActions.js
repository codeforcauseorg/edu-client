// Action types
export const DOUBT_ERROR = "doubtError";
export const DOUBT_LOADING = "doubtLoading";
// Action creators

export const doubtError = (payload) => ({
  type: DOUBT_ERROR,
  payload: payload,
});

export const doubtLoading = (payload) => ({
  type: DOUBT_LOADING,
  payload: payload,
});
