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
  SET_NEW_EVENT,
  SET_NEW_EVENT_ONLINE,
  setCategories,
  setEventForHome,
  setCategoriesForHome,
  setInfoForEventPage,
  EDIT_EVENT,
  setValidateForm, 
} from "../actions/events";
import { LOGIN, setCurrentUser, setErrorLogin, setJoinEventStatus, SIGNUP } from "../actions/user";
// import { LOGIN, login, setCurrentUser, SIGNUP, signup } from "../actions/user";



// link to the API in order to put only endpoints in switch case
const api = axios.create({
  // baseURL: "http://localhost:8080/api/",
  baseURL: "https://api-meet-us.herokuapp.com/api/",
  // baseUrl: "http://jimmy-martin.vpnuser.lan/SpeSymfony/meet-us-api/public/api/v1",
  // headers: {'Authorization': `Bearer ${token}`}
});

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_EVENTS_FOR_HOME: {
      // endpoints to load the 3 next events for home

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

      const token = localStorage.getItem('Token'); 


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
      api
        .get(`v1/events/${action.eventId}`, {

        })
        .then((response) => {
          console.log(response.data);
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

      // const cookies = new Cookies();
      // const token = cookies.get('Pizzeria');

      const token = localStorage.getItem('Token'); 


        axios({
          headers: { "Authorization": `Bearer ${token}` } ,
           data: {
             eventId: eventId, 
           },
           url: `http://localhost:8080/api/v1/events/${eventId}/add`, 
           method: 'post',

      })
      .then(function (reponse) {
          //When user join the event, status is true and button will change
          store.dispatch(setJoinEventStatus()); 
          console.log(reponse.data);
      })
      .catch(function (erreur) {
          //On traite ici les erreurs éventuellement survenues
          console.log(erreur);
      });

      next(action);
      break;
    }
    case LOAD_EVENT_LIST_IN_PROGRESS: {
      api
        .get("v1/events", {
        })
        .then((response) => {
          console.log('reponse load event list in progress', response);
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
      const token = localStorage.getItem('Token'); 

      api
        .get("v1/events/past", {
          headers: { Authorization: `Bearer ${token}` },

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
      // endpoints to load all categories 


      const token = localStorage.getItem("Token");

      api
        .get("v1/categories?limit=50", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(setCategories(response.data));
        })
        .catch((error) =>
          console.log("on a une erreur sur les 6 categories de la home", error)
        );
      next(action);
      break;
    }
    case LOAD_SELECT_CATEGORIES_EVENT_LIST: {
      // endpoints to load 6 cateogories for eventList
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
      api
        .post("/login_check", {
          username: action.values.email,
          password: action.values.password,
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(setCurrentUser(response.data));
          const {user: { token, user }} = store.getState();
          localStorage.setItem('Token', token);
          localStorage.setItem('User', JSON.stringify(user));
        })
        .catch((error) => {
        store.dispatch(setErrorLogin())
        console.log("on a une erreur sur la ", error)
      });
      next(action);
      break;
    }
    case SET_NEW_EVENT: {

      const token = localStorage.getItem("Token");
      // const {google: { value }} = store.getState();

      // let data = new FormData(); 
      // data.append('picture', action.values.picture);

        axios({
          headers: { 
            "Authorization": `Bearer ${token}`,  
            "Accept": "application/json", 
            "Content-Type": "multipart/form-data", 
          } ,
          data: {
            title : action.values.title,
            description: action.values.description,
            date: action.values.date,
            category: action.values.category,
            maxMembers:action.values.maxMembers,
            address: action.values.address,
            city: action.values.city,
            country: action.values.country,
            zipcode: action.values.zipcode
        },
           url: 'http://localhost:8080/api/v1/events', 
           method: 'post',

      })
      .then(function (reponse) {
          // store.dispatch(setValidateForm(reponse.data));
          store.dispatch(setValidateForm(reponse.data)); 
          console.log('formData middleware', reponse.data);
          console.log("CA A FONCTIONNER"); 
      })
      .catch(function (erreur) {
         
        window.alert("Une erreur s'est produite, veuillez réessayer");  
          console.log(erreur);
      });

      next(action);
      break;
    }
    case SET_NEW_EVENT_ONLINE: {

      // const cookies = new Cookies();
      // const token = cookies.get('Pizzeria');

      const token = localStorage.getItem('Token'); 


        axios({
          headers: { "Authorization": `Bearer ${token}` } ,
          data: {
            title : action.values.title, 
            description: action.values.description,
            date: action.values.date,
            category: action.values.category,
            maxMembers:action.values.maxMembers,    
            isOnline: action.values.picked,
        },
           url: 'http://localhost:8080/api/v1/events?type=online', 
           method: 'post',

      })
      .then(function (reponse) {
          console.log(reponse.data);
          store.dispatch(setValidateForm(reponse.data));  
          console.log("EVENT CREER");
      })
      .catch(function (erreur) {
        window.alert("Une erreur s'est produite, veuillez réessayer");  
          console.log(erreur);
      });

      next(action);
      break;
    }
    case SIGNUP: {
      axios({   
        // headers: { "Authorization": '' },   
        data: { 
          email : action.values.email, 
          password: action.values.password, 
          lastname: action.values.lastname, 
          firstname: action.values.firstname,
        },
          method: 'post',
          url: `http://localhost:8080/api/v1/users`, 
        })
        .then((response) => {
          // store.dispatch(setValidateForm());
          console.log(response);
        })
        .catch((erreur) => {
          console.log(erreur);
          window.alert("Une erreur s'est produite, veuillez réessayer");
        })
      next(action);
      break;
    } 
  
    case EDIT_EVENT: {


      // const cookies = new Cookies();
      // const token = cookies.get('Pizzeria');

      const token = localStorage.getItem('Token'); 

      axios({
        headers: { "Authorization": `Bearer ${token}` },
        data: { 
          title: action.values.title,
          date: action.values.date,
          city: action.values.city,
          category: action.values.category,
          maxMembers: action.values.maxMembers,
        },
        method: 'put',
        url: `http://localhost:8080/api/v1/events/${action.eventId}`, 
      })
        .then((response) => {
          // alert(JSON.stringify( response.data, null, 2));
          console.log('modif event', response);
        })
        .catch((erreur) => {
           window.alert("Une erreur s'est produite, veuillez réessayer");
          console.log(erreur);
        })
      next(action);
      break;
    } 
    default:
      next(action);
  }
};

export default apiMiddleware;
