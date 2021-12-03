import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import apiMiddleWare from '../middlewares/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(apiMiddleWare),
);

const store = createStore(reducer, enhancers);

export default store;
