import produce from "immer";
import { LOGIN_REQUEST, LOGOUT, SILENT_LOGIN } from "../actions/accountActions";

const initialState = {
  user: undefined,
  login: undefined,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return produce(state, (draft) => {
        draft.login = true;
      });
    }

    case LOGOUT: {
      return produce(state, (draft) => {
        draft.user = null;
      });
    }

    case SILENT_LOGIN: {
      const { user } = action.payload;

      return produce(state, (draft) => {
        draft.user = user;
      });
    }

    default: {
      return state;
    }
  }
};

export default accountReducer;
