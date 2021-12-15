import { 
  LOGOUT, 
  SET_CURRENT_USER, 
  STOCK_LOGIN_COOKIE, 
  SET_JOIN_EVENT_STATUS } from "../actions/user";

export const initialState = {
    token: null,
    user: {
    },
    logged: false,
    joinEvent: false, 
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
        }
        case SET_JOIN_EVENT_STATUS:
        return {
          ...state, 
          joinEvent: true, 
        }
      default:
        return state;
    }
  };
  
  export default reducer;
  