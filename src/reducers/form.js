import { SET_RESPONSE } from "../actions/events";

const initialState = {
  setResponse: false,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_RESPONSE:
        return {
            ...state, 
            setResponse: true,
        }
    default:
      return state;
  }
};

export default reducer;