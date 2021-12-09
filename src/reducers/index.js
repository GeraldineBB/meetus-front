import { combineReducers } from "redux";

import eventsReducer from "./events";
import categoriesReducer from "./categoriesReducer";
import userReducer from './user'; 

const rootReducer = combineReducers({
  events: eventsReducer,
  categories: categoriesReducer,
  user: userReducer, 
});

export default rootReducer;
