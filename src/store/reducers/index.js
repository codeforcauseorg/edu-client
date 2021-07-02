import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import accountReducer from "./accountReducer";
import wishlistReducer from "./wishlistReducer";
import courseReducer from "./courseReducers";

const rootReducer = combineReducers({
  account: accountReducer,
  form: formReducer,
  wishlist: wishlistReducer,
  course: courseReducer,
});

export default rootReducer;
