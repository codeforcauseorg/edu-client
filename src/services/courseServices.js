import axios from "../utils/axios";
import {
  featchCourseRequest,
  featchCourseSuccess,
  featchCourseFailure,
} from "../store/actions/courseActions";

export const fetchCourseData = () => {
  return async (dispatch) => {
    try {
      dispatch(featchCourseRequest());
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts"); // dummy URL for testing API call
      const data = await response.data;
      dispatch(featchCourseSuccess(data));
    } catch (error) {
      const errorMsg = error.message;
      dispatch(featchCourseFailure(errorMsg));
    }
  };
};
