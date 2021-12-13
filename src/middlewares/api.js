import axios from "axios";
import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_FOR_HOME,
  LOAD_EVENTS_FOR_HOME,
  LOAD_EVENT_LIST_IN_PROGRESS,
  setEventListInProgress,
  LOAD_EVENT_LIST_ARCHIVED,
  setEventListArchived,
  LOAD_SELECT_CATEGORIES_EVENT_LIST,
  setSelectCategoriesEventList,
  LOAD_INFO_FOR_PAGE_EVENT,
  ADD_USER_TO_EVENT,
  setCategories,
  setEventForHome,
  setCategoriesForHome,
  setInfoForEventPage,
} from "../actions/events";
import { LOGIN, login, setCurrentUser } from "../actions/user";
import Cookies from 'universal-cookie';
import { set } from "date-fns";


// link to the API in order to put only endpoints in switch case
const api = axios.create({
  baseURL: "http://localhost:8080/api/",
  // baseURL: "https://api-meet-us.herokuapp.com/api/v1",
  // baseUrl: "http://jimmy-martin.vpnuser.lan/SpeSymfony/meet-us-api/public/api/v1",
  // headers: {'Authorization': `Bearer ${token}`}
});

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_EVENTS_FOR_HOME: {
      // endpoints to load the 3 next events for home

      const cookies = new Cookies();
      const token = cookies.get('Pizzeria');
      console.log(token)

      api
        .get("v1/events?limit=3", {
        })
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

     const cookies = new Cookies();
      const token = cookies.get('Pizzeria');

      api
        .get("v1/categories?limit=6", {
          headers: { Authorization: `Bearer ${token}` },
        })
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
    case LOAD_INFO_FOR_PAGE_EVENT: {
      const cookies = new Cookies();
      const token = cookies.get('Pizzeria');

      api
        .get(`v1/events/${action.eventId}`, {

        })
        .then((response) => {
          console.log(response);
          store.dispatch(setInfoForEventPage(response.data));
        })
        .catch((error) =>
          console.log("on a une erreur sur les info de l'event", error)
        );
      next(action);
      break;
    }

    case ADD_USER_TO_EVENT: {
      const eventId = action.eventId;

      // envoyer le token

      const cookies = new Cookies();
      const token = cookies.get('Pizzeria');

      api
        .post(`v1/events/${eventId}/add`, { headers: eventId, token })
        .then((response) => {
          console.log(response);
          console.log(
            "ici je récupère les données de la requête en post",
            response.data
          );
        })
        .catch((error) =>
          console.log(
            "on a une erreur sur l'ajout d'un membre à un event",
            error
          )
        );
      next(action);
      break;
    }
    case LOAD_EVENT_LIST_IN_PROGRESS: {
      // endpoints to load 6 cateogories for home

      const cookies = new Cookies();
      const token = cookies.get('Pizzeria');
      api
        .get("v1/events", {
        })
        .then((response) => {
          console.log(response);
          store.dispatch(setEventListInProgress(response.data));
        })
        .catch((error) =>
          console.log(
            "on a une erreur sur les evenement de la page liste evenement",
            error
          )
        );
      next(action);
      break;
    }
    case LOAD_EVENT_LIST_ARCHIVED: {
      // endpoints to load 6 cateogories for home

      const cookies = new Cookies();
      const token = cookies.get('Pizzeria');
      api
        .get("v1/events?limit=2", {

        })
        .then((response) => {
          console.log(response);
          store.dispatch(setEventListArchived(response.data));
        })
        .catch((error) =>
          console.log(
            "on a une erreur sur les evenement de la page liste evenement",
            error
          )
        );
      next(action);
      break;
    }
    case LOAD_CATEGORIES: {
      // endpoints to load all cateogories in a list
      api
        .get("v1/categories", {})
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
    case LOAD_SELECT_CATEGORIES_EVENT_LIST: {
      // endpoints to load 6 cateogories for eventList

      const cookies = new Cookies();
      const token = cookies.get('Pizzeria');

      api
        .get("v1/categories?limit=50", {
        })
        .then((response) => {
          console.log(response);
          store.dispatch(setSelectCategoriesEventList(response.data));
        })
        .catch((error) =>
          console.log(
            "on a une erreur sur les 6 categories du select menu dans la page event list",
            error
          )
        );
      next(action);
      break;
    }
    case LOGIN: {
      const cookies = new Cookies();
      api
        .post("/login_check", {
          username: action.values.email,
          password: action.values.password,
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(setCurrentUser(response.data));
          const {user: { token }} = store.getState();
          cookies.set("Pizzeria", token);
        })
        .catch((error) => console.log("on a une erreur sur la ", error));
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default apiMiddleware;
