// import {getDataURLByRoute} from '/src/services/data.service';
import {apiRequest} from '../actions/api.action';
import {UPDATE_ACTIVE_DATA} from '../actions/data.action';
import {getDataURLByRoute} from '../../services/data.service';
const CHANGE_ROUTE = '@@router/LOCATION_CHANGE';
const FETCH_DATA_ERROR = () => null;    // TBD

// this middleware care only for API calls
export const dataMiddleware = ({dispatch}) => next => action => {
  if (action.type === CHANGE_ROUTE) {
    console.log('route change!', action);
    const URL = getDataURLByRoute(action.payload.location.pathname);
    dispatch(apiRequest('GET', URL, null, UPDATE_ACTIVE_DATA, FETCH_DATA_ERROR));
  }
  return next(action);
};
