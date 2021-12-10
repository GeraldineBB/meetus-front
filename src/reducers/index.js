import { combineReducers } from "redux";

import eventsReducer from "./events";
import categoriesReducer from "./categoriesReducer";
import userReducer from './user'; 
import formReducer from './form';

const rootReducer = combineReducers({
  form: formReducer,
  events: eventsReducer,
  categories: categoriesReducer,
  user: userReducer, 
});

export default rootReducer;
