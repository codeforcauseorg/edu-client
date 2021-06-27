import axios from "../utils/axios";
import { featchCourseRequest, featchCourseSuccess } from "../store/actions/courseActions";
import errorHandler from "./errorHandler";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchCourseData = () => {
  return async (dispatch) => {
    try {
      dispatch(featchCourseRequest());
      const response = await axios.get(`${BASE_URL}/posts`); // dummy URL for testing API call
      const data = await response.data;
      dispatch(featchCourseSuccess(data));
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
};

export const fetchCourseDetailsData = (id) => {
  return async (dispatch) => {
    try {
      dispatch(featchCourseRequest());
      const response = await axios.get(`${BASE_URL}/posts/${id}`); // dummy URL for testing API call
      const data = await response.data;
      dispatch(featchCourseSuccess(data));
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
};
