import eventsData from '../data/eventsData.js';

export const initialState = {
    list: eventsData,
};


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
export default reducer;
