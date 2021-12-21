import {
  LOGOUT,
  SET_CURRENT_USER,
  STOCK_LOGIN_COOKIE,
  SET_JOIN_EVENT_STATUS,
  SET_ERROR_LOGIN,
} from "../actions/user";

export const initialState = {
  token: null,
  user: {},
  logged: false,
  joinEvent: false,
  errorLogin: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        token: action.values.token,
        user: action.values.data.user,
        logged: true,
        errorLogin: false,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: {},
        logged: false,
      };
    case STOCK_LOGIN_COOKIE:
      return {
        ...state,
        token: action.token,
        logged: true,
        user: action.user,
      };
    case SET_JOIN_EVENT_STATUS:
      return {
        ...state,
        joinEvent: true,
      };
    case SET_ERROR_LOGIN:
      return{
        ...state,
        errorLogin: true,
      }
    default:
      return state;
  }
};

export default reducer;
