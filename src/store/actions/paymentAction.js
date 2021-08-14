// Action types
export const PAYMENT_ERROR = "paymentError";
export const PAYMENT_LOADING = "paymentLoading";
export const PAYMENT_SUCCESS = "paymentSuccess";
// Action creators

export const paymentError = (payload) => ({
  type: PAYMENT_ERROR,
  payload: payload,
});

export const paymentLoading = (payload) => ({
  type: PAYMENT_LOADING,
  payload: payload,
});

export const paymentSuccess = (payload) => ({
  type: PAYMENT_SUCCESS,
  payload: payload,
});
