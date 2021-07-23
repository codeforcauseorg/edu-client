import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import accountReducer from "./accountReducer";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  account: accountReducer,
  form: formReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
