import axios from "../utils/mockaxios";
import { fetchCourseDetailsData, fetchCourseData } from "../store/actions/courseActions";
import errorHandler from "./errorHandler";

export const setCourseData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/courses/all"); // mock URL for testing
      if (response.status === 200) {
        const data = await response.data;
        dispatch(fetchCourseData(data));
      }
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
};

export const setCourseDetailsData = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/courses/details"); // mock URL for testing
      if (response.status === 200) {
        const data = await response.data;
        dispatch(fetchCourseDetailsData(data));
      }
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
};
