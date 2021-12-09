import { SET_CATEGORIES_FOR_HOME, SET_CATEGORIES } from "../actions/events.js";
// import CategoriesData from '../data/categoriesData.js';

export const initialState = {
  categorieList: [],
  homeCategorieList: [],
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CATEGORIES_FOR_HOME:
      return {
        ...state,
        homeCategorieList: action.value,
      };
      case SET_CATEGORIES:
      return {
        ...state,
        categorieList: action.value,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
