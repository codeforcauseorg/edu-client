import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import accountReducer from "./accountReducer";
import paymentReducer from "./paymentReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  account: accountReducer,
  form: formReducer,
  user: userReducer,
  payment: paymentReducer,
});

export default rootReducer;
