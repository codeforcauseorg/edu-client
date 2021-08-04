import { userError } from "../store/actions/userActions";

function errorHandler(erros, dispatch) {
  if (erros.response) {
    dispatch(userError(erros.response));
  } else if (erros.request) {
    dispatch(userError(erros.request));
  } else {
    dispatch(userError(erros.message));
  }
}

export default errorHandler;
