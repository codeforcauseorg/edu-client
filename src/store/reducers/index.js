import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import accountReducer from "./accountReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  account: accountReducer,
  form: formReducer,
  user: userReducer,
});

export default rootReducer;
