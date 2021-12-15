import { combineReducers } from "redux";

import eventsReducer from "./events";
import categoriesReducer from "./categoriesReducer";
import userReducer from './user'; 
import googleReducer from './googleReducer'

const rootReducer = combineReducers({
  events: eventsReducer,
  categories: categoriesReducer,
  user: userReducer, 
  google: googleReducer,
});

export default rootReducer;
