import axios from 'axios';

// import {  } from '../actions';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // case :
      
    //   next(action);
    //   break;
    default:
      next(action);
  }
};

export default apiMiddleware;