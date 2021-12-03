import CategoriesData from '../data/categoriesData.js';

export const initialState = {
    categoriesList: CategoriesData,
};


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
export default reducer;
