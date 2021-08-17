import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import accountReducer from "./accountReducer";
import doubtReducer from "./doubtReducer";
import paymentReducer from "./paymentReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  account: accountReducer,
  form: formReducer,
  user: userReducer,
  payment: paymentReducer,
  doubt: doubtReducer,
});

export default rootReducer;
