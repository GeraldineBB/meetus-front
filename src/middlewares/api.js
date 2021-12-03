import axios from 'axios';
import { LOAD_EVENTS_FOR_HOME } from '../actions/events';


const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_EVENTS_FOR_HOME: {
      axios.get ('http://jimmy-martin.vpnuser.lan/SpeSymfony/meet-us-api/public/api/v1/events?limit=3', {
      }).then (
        (response) => {
          console.log(response); 
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