import { produce } from "immer";
import {
  FETCH_COURSE_SUCCESS,
  FETCH_COURSE_REQUEST,
  FETCH_COURSE_FAILURE,
} from "../actions/courseActions";

const initialState = {
  loading: false,
  course: [],
  error: "",
};

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.course = action.payload;
        draft.error = "";
      });
    case FETCH_COURSE_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case FETCH_COURSE_FAILURE:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.course = [];
        draft.error = action.payload;
      });
    default:
      return initialState;
  }
}
