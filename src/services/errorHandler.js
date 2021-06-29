import { fetchCourseFailure } from "../store/actions/courseActions";

function errorHandler(erros, dispatch) {
  if (erros.response) {
    dispatch(fetchCourseFailure(erros.response));
  } else if (erros.request) {
    dispatch(fetchCourseFailure(erros.request));
  } else {
    dispatch(fetchCourseFailure(erros.message));
  }
}

export default errorHandler;
