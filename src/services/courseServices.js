import axios from "../utils/mockaxios";
import { fetchCourseSuccess } from "../store/actions/courseActions";
import errorHandler from "./errorHandler";

export const fetchCourseData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/courses/all"); // mock URL for testing
      if (response.status === 200) {
        const data = await response.data;
        dispatch(fetchCourseSuccess(data));
      }
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
};

export const fetchCourseDetailsData = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/courses/${id}`); // mock URL for testing
      if (response.status === 200) {
        const data = await response.data;
        console.log(data);
        dispatch(fetchCourseSuccess(data));
      }
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
};
