import { produce } from "immer";
import { DOUBT_ERROR, DOUBT_LOADING } from "../actions/doubtActions";

const initialState = {
  error: undefined,
  loading: false,
};

export default function doubtReducer(state = initialState, action) {
  switch (action.type) {
    case DOUBT_ERROR:
      return produce(state, (draft) => {
        draft.error = action.payload;
      });
    case DOUBT_LOADING:
      return produce(state, (draft) => {
        draft.loading = action.payload;
      });
    default:
      return initialState;
  }
}
