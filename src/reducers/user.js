import { LOGOUT, SET_CURRENT_USER } from "../actions/user";

export const initialState = {
    token: null,
    user: {
    },
    logged: true,
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
      default:
        return state;
    }
  };
  
  export default reducer;
  