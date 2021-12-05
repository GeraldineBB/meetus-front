import { SET_CATEGORIES_FOR_HOME } from '../actions/events.js';
// import CategoriesData from '../data/categoriesData.js';

export const initialState = {
    homeCategorieList: [],
};


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_CATEGORIES_FOR_HOME:
        return {
          ...state, 
          homeCategorieList: action.value, 
        }
      default:
        return state;
    }
  };
  
export default reducer;
