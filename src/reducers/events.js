import events from '../data';

export const initialState = {
    list: events,
};


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
export default reducer;
