import axios from 'axios';
import { LOAD_EVENTS_FOR_HOME, setEventForHome } from '../actions/events';

const api = axios.create({
  baseURL: 'http://jimmy-martin.vpnuser.lan/SpeSymfony/meet-us-api/public/api/v1',
});

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_EVENTS_FOR_HOME: {
      api.get ('/events?limit=3', {
      }).then (
        (response) => {
          console.log(response); 
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