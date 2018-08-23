import {apiRequest} from '../actions/api.action';
import {UPDATE_ACTIVE_DATA} from '../actions/data.action';
const CHANGE_ROUTE = '@@router/LOCATION_CHANGE';
const FETCH_DATA_ERROR = () => null;    // TBD

// this middleware care only for API calls
export const dataMiddleware = ({dispatch}) => next => action => {
  if (action.type === CHANGE_ROUTE) {
    const url = `/api${action.payload.location.pathname}`;
    dispatch(apiRequest('GET', url, null, UPDATE_ACTIVE_DATA, FETCH_DATA_ERROR));
  }
  return next(action);
};
