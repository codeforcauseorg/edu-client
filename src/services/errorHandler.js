import { featchCourseFailure } from "../store/actions/courseActions";

function errorHandler(erros, dispatch) {
  if (erros.response) {
    dispatch(featchCourseFailure(erros.response));
  } else if (erros.request) {
    dispatch(featchCourseFailure(erros.request));
  } else {
    dispatch(featchCourseFailure(erros.message));
  }
}

export default errorHandler;
