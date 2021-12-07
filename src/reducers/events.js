import {
  archived,
  ARCHIVED,
  inProgress,
  IN_PROGRESS,
  SET_EVENT_FOR_HOME,
  SET_EVENT_LIST_ARCHIVED,
  SET_EVENT_LIST_IN_PROGRESS,
} from "../actions/events.js";
// import eventsData from '../data/eventsData.js';

export const initialState = {
  homeEventList: [],
  eventPageListInProgress: [],
  eventPageListArchived: [],
  inProgress: true,
  archived: false,
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
      case SET_EVENT_LIST_ARCHIVED:
      return {
        ...state,
        eventPageListArchived: action.value,
      };
    case IN_PROGRESS:
      return {
        ...state,
        archived: false,
        inProgress: true,
      };
    case ARCHIVED:
      return {
        ...state,
        archived: true,
        inProgress: false,
      };
    default:
      return state;
  }
};

export default reducer;
