import { LOGOUT, SET_CURRENT_USER, STOCK_LOGIN_COOKIE } from "../actions/user";

export const initialState = {
    token: null,
    user: {
    },
    logged: false,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_CURRENT_USER:
        return {
          ...state,
          token: action.values.token,
          user: action.values.data.user,
          logged: true,
        }
        case LOGOUT:
        return {
          ...state,
          token: null,
          user: {},
          logged: false,
        }
        case STOCK_LOGIN_COOKIE:
        return {
          ...state,
          token: action.token,
          logged: true,
          user: action.user
        }
      default:
        return state;
    }
  };
  
  export default reducer;
  