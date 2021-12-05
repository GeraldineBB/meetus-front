import axios from 'axios';
import { LOAD_EVENTS_FOR_HOME, setEventForHome } from '../actions/events';

// link to the API in order to put only endpoints in switch case
const api = axios.create({
  baseURL: 'http://jimmy-martin.vpnuser.lan/SpeSymfony/meet-us-api/public/api/v1',
});

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_EVENTS_FOR_HOME: {
      // endpoints to load the 3 next events for home
      api.get ('/events?limit=3', {
      }).then (
        (response) => {
          console.log(response); 
          // change state in order to put the 3 next events in prop list of the state events
          store.dispatch(setEventForHome(response.data));
        }, 
      ).catch(
        (error) => console.log('on a une erreur', error),
      );

      next(action);
      break;
    }

    default:
    next(action);
  }
};

export default apiMiddleware;