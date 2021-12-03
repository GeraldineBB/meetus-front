import eventsList from '../data';

export const initialState = {
    list: eventsList,
};


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
export default reducer;
