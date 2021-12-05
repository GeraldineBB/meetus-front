import { SET_EVENT_FOR_HOME } from '../actions/events.js';
import eventsData from '../data/eventsData.js';

export const initialState = {
    list: eventsData,
};


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_EVENT_FOR_HOME:
      return {
        ...state,
        list: action.value,
      };
      default:
        return state;
    }
  };
  
export default reducer;
