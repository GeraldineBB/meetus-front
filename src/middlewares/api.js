import axios from "axios";
import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_FOR_HOME,
  LOAD_EVENTS_FOR_HOME,
  LOAD_EVENT_INFO_FOR_EDIT_FORM,
  setEventForHome,
  setCategoriesForHome,
  setCategories,
  setEventInfoForEditForm,
} from "../actions/events";
/* https://api-meet-us.herokuapp.com/api/v1 */
// link to the API in order to put only endpoints in switch case
const api = axios.create({
   baseURL: "" ,
});

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_EVENTS_FOR_HOME: {
      // endpoints to load the 3 next events for home
      api
        .get("/events?limit=3", {})
        .then((response) => {
          console.log(response);
          // change state in order to put the 3 next events in prop list of the state events
          store.dispatch(setEventForHome(response.data));
        })
        .catch((error) =>
          console.log("on a une erreur sur les 3 events de la home", error)
        );

      next(action);
      break;
    }
    case LOAD_CATEGORIES_FOR_HOME: {
      // endpoints to load 6 cateogories for home
      api
        .get("/categories?limit=6", {})
        .then((response) => {
          console.log(response);
          store.dispatch(setCategoriesForHome(response.data));
        })
        .catch((error) =>
          console.log("on a une erreur sur les 6 categories de la home", error)
        );
      next(action);
      break;
    }
    case LOAD_CATEGORIES: {
      // endpoints to load all cateogories in a list
      api
        .get("/categories?limit=6", {}) 
        .then((response) => {
          console.log(response);
          store.dispatch(setCategories(response.data));
        })
        .catch((error) =>
          console.log("problème de chargement des catégories", error)
        );
      next(action);
      break;
    }
    /* case LOAD_EVENT_INFO_FOR_EDIT_FORM:{

      api.get(`/events/${action.eventId}`,  {})
      .then((response)=> {
        console.log(response);
        store.dispatch(setEventInfoForEditForm(response.data)); 
  
      })
      .catch((error) =>
      console.log("on a une erreur sur les info de l'event", error)
      );
      next(action);
      break;
    } */

    default:
      next(action);
  }
};

export default apiMiddleware;
