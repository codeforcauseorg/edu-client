import { produce } from "immer";
import { USER_ERROR } from "../actions/userActions";

const initialState = {
  error: undefined,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ERROR:
      return produce(state, (draft) => {
        draft.error = action.payload;
      });
    default:
      return initialState;
  }
}
