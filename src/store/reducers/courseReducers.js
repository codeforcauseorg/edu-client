import { produce } from "immer";
import {
  FETCH_COURSEDETAILS_DATA,
  FETCH_COURSE_DATA,
  FETCH_COURSE_FAILURE,
} from "../actions/courseActions";

const initialState = {
  course: null,
  courseDetails: null,
  error: "",
};

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_DATA:
      return produce(state, (draft) => {
        draft.course = action.payload;
        draft.error = "";
      });
    case FETCH_COURSEDETAILS_DATA:
      return produce(state, (draft) => {
        draft.courseDetails = action.payload;
        draft.error = "";
      });
    case FETCH_COURSE_FAILURE:
      return produce(state, (draft) => {
        draft.course = null;
        draft.courseDetails = null;
        draft.error = action.payload;
      });
    default:
      return initialState;
  }
}
