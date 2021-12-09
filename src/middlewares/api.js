import axios from "axios";
import {
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

  setEventForHome,
  setCategoriesForHome,
  setInfoForEventPage, 
} from "../actions/events";

import {useSelector} from 'react-redux'; 



// link to the API in order to put only endpoints in switch case
const api = axios.create({
  baseURL: "http://localhost:8080/api/v1", 
  // baseURL: "https://api-meet-us.herokuapp.com/api/v1",
  // baseUrl: "http://jimmy-martin.vpnuser.lan/SpeSymfony/meet-us-api/public/api/v1", 
  // headers: {'Authorization': `Bearer ${token}`}
});



const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_EVENTS_FOR_HOME: {
      // endpoints to load the 3 next events for home


      // const token = useSelector(
      //   (state) => state.user.token
      //   );

      const { user: { token } } = store.getState();

      api
        .get("/events?limit=3", {
            headers: {'Authorization': `Bearer ${token}`}
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

      const { user: { token } } = store.getState();


      api
        .get("/categories?limit=6", {
          headers: {'Authorization': `Bearer ${token}`}
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
    case LOAD_INFO_FOR_PAGE_EVENT:{

      const { user: { token } } = store.getState();


      api.get(`/events/${action.eventId}`, {
        headers: {'Authorization': `Bearer ${token}`}

      })
      .then((response)=> {
        console.log(response);
        store.dispatch(setInfoForEventPage(response.data)); 
  
      })
      .catch((error) =>
      console.log("on a une erreur sur les info de l'event", error)
      );
      next(action);
      break;
    }

    case ADD_USER_TO_EVENT:{

      const eventId = action.eventId; 

      // envoyer le token 

      const { user: { token } } = store.getState();

      api.post(`/events/${eventId}/add`, 
      {headers: eventId, token })
      .then((response)=> {
        console.log(response);
        console.log('ici je récupère les données de la requête en post', response.data);
      
      })
      .catch((error) =>
      console.log("on a une erreur sur l'ajout d'un membre à un event", error)
      );
      next(action);
      break;
    }
    case LOAD_EVENT_LIST_IN_PROGRESS: {
      // endpoints to load 6 cateogories for home

      const { user: { token } } = store.getState();

      api
        .get("/events", { headers: {'Authorization': `Bearer ${token}`}})
        .then((response) => {
          console.log(response);
          store.dispatch(setEventListInProgress(response.data));
        })
        .catch((error) =>
          console.log("on a une erreur sur les evenement de la page liste evenement", error)
        );
      next(action);
      break;
    }
    case LOAD_EVENT_LIST_ARCHIVED: {
      // endpoints to load 6 cateogories for home

      const { user: { token } } = store.getState();

      api
        .get("/events?limit=2", { headers: {'Authorization': `Bearer ${token}`}})
        .then((response) => {
          console.log(response);
          store.dispatch(setEventListArchived(response.data));
        })
        .catch((error) =>
          console.log("on a une erreur sur les evenement de la page liste evenement", error)
        );
      next(action);
      break;
    }
    case LOAD_SELECT_CATEGORIES_EVENT_LIST: {
      // endpoints to load 6 cateogories for eventList

      const { user: { token } } = store.getState();

      api
        .get("/categories?limit=50", { headers: {'Authorization': `Bearer ${token}`}})
        .then((response) => {
          console.log(response);
          store.dispatch(setSelectCategoriesEventList(response.data));
        })
        .catch((error) =>
          console.log("on a une erreur sur les 6 categories du select menu dans la page event list", error)
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default apiMiddleware;
