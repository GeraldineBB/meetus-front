import {
  SET_INPUT_VALUE,
  SET_LOADED,
  SET_OPTIONS,
  SET_VALUE,
} from "../actions/googleMapAutocompletion";

export const initialState = {
  value: '',
  inputValue: null,
  options: [],
  loaded: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.values,
      };
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.values,
      };
    case SET_OPTIONS:
      return {
        ...state,
        options: action.values,
      };
    case SET_LOADED:
      return {
        ...state,
        loaded: true,
      };
    default:
      return state;
  }
};

export default reducer;
