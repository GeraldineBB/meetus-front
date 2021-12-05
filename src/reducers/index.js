import { combineReducers } from "redux";

import eventsReducer from "./events";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  events: eventsReducer,
  categories: categoriesReducer,
});

export default rootReducer;
