import { produce } from "immer";
import { USER_ERROR, USER_LOADING } from "../actions/userActions";

const initialState = {
  error: undefined,
  loading: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ERROR:
      return produce(state, (draft) => {
        draft.error = action.payload;
      });
    case USER_LOADING:
      return produce(state, (draft) => {
        draft.loading = action.payload;
      });
    default:
      return initialState;
  }
}
