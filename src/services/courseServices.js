import axios from "../utils/axios";
import { fetchCourseDetailsData, fetchCourseData } from "../store/actions/courseActions";
import errorHandler from "./errorHandler";

export const setCourseData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/course/cards/all");
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
      const response = await axios.get(`/course/${id}`);
      if (response.status === 200) {
        const data = await response.data;
        dispatch(fetchCourseDetailsData(data));
      }
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
};
