import { produce } from "immer";
import { PAYMENT_ERROR, PAYMENT_LOADING, PAYMENT_SUCCESS } from "../actions/paymentAction";

const initialState = {
  error: undefined,
  loading: false,
  success: false,
};

export default function paymentReducer(state = initialState, action) {
  switch (action.type) {
    case PAYMENT_ERROR:
      return produce(state, (draft) => {
        draft.error = action.payload;
      });
    case PAYMENT_LOADING:
      return produce(state, (draft) => {
        draft.loading = action.payload;
      });
    case PAYMENT_SUCCESS:
      return produce(state, (draft) => {
        draft.success = action.payload;
      });
    default:
      return initialState;
  }
}
