import {
  ARCHIVED,
  CURRENT_SELECT_CATEGORIES_EVENT_LIST,
  IN_PROGRESS,
  SEARCH_BAR_EVENT_LIST,
  SELECT_CATEGORIES_EVENT_LIST_IS_CLOSE,
  SELECT_CATEGORIES_EVENT_LIST_IS_OPEN,
  SET_EVENT_FOR_HOME,
  SET_EVENT_LIST_ARCHIVED,
  SET_EVENT_LIST_IN_PROGRESS,
  SET_SELECT_CATEGORIES_EVENT_LIST,
  SET_INFO_FOR_EVENTPAGE,
} from "../actions/events.js";

export const initialState = {
  homeEventList: [],
  eventPageListInProgress: [],
  eventPageListArchived: [],
  inProgress: true,
  archived: false,
  currentSearchBar: '',
  currentSelectCategoriesEventList: '',
  selectCategoriesEventList: [],
  selectCategoriesEventListIsOpen: false,
  selectCategoriesEventListIsClose: true,
  eventInfoPage: [], 
  loading: true, 
  eventCurrentInfo: [],
  currentLng: null,
  currentLat: null,

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
    case SEARCH_BAR_EVENT_LIST:
      return{
        ...state,
        currentSearchBar: action.value
      };
      case SET_SELECT_CATEGORIES_EVENT_LIST:
        return{
          ...state,
          selectCategoriesEventList: action.value
        };
      case SELECT_CATEGORIES_EVENT_LIST_IS_CLOSE:
        return{
          ...state,
          selectCategoriesEventListIsOpen: false,
          selectCategoriesEventListIsClose: true,
        };
      case SELECT_CATEGORIES_EVENT_LIST_IS_OPEN:
        return{
          ...state,
          selectCategoriesEventListIsClose: false,
          selectCategoriesEventListIsOpen: true,
        };
      case CURRENT_SELECT_CATEGORIES_EVENT_LIST:
        return{
          ...state,
          currentSelectCategoriesEventList: action.value,
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
