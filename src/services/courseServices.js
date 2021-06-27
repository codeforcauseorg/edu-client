import axios from "../utils/axios";
import { featchCourseRequest, featchCourseSuccess } from "../store/actions/courseActions";
import errorHandler from "./errorHandler";

export const fetchCourseData = () => {
  return async (dispatch) => {
    try {
      dispatch(featchCourseRequest());
      const response = await axios.get("https://jsonplaceholder.typicode.com/poss"); // dummy URL for testing API call
      const data = await response.data;
      dispatch(featchCourseSuccess(data));
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
};
