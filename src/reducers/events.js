import { SET_EVENT_FOR_HOME, SET_EVENT_LIST_IN_PROGRESS } from "../actions/events.js";
// import eventsData from '../data/eventsData.js';

export const initialState = {
  homeEventList: [],
  eventPageListInProgress: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_EVENT_FOR_HOME:
      return {
        ...state,
        homeEventList: action.value,
      };
    case SET_EVENT_LIST_IN_PROGRESS:
      return {
        ...state,
        eventPageListInProgress: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
