import { SET_CURRENT_USER } from "../actions/user";

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
      default:
        return state;
    }
  };
  
  export default reducer;
  