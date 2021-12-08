import { SET_EVENT_FOR_HOME, SET_INFO_FOR_EVENTPAGE } from "../actions/events.js";
// import eventsData from '../data/eventsData.js';

export const initialState = {
  homeEventList: [],
  eventInfoPage: [], 
  loading: true, 
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_EVENT_FOR_HOME:
      return {
        ...state,
        homeEventList: action.value,
      };
    case SET_INFO_FOR_EVENTPAGE:
      return {
        ...state, 
        loading: false, 
        eventInfoPage: action.value, 
      }
    default:
      return state;
  }
};

export default reducer;
