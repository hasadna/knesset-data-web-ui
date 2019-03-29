import {apiRequest} from '../actions/api.action';
import {CONVERT_DATA_TO_UI_BLOCK} from '../actions/data.action';
import {UPDATE_UI_BLOCKS} from '../actions/ui.action';
import {convertToUIBlocks} from '../../services/conversion.service';

const CHANGE_ROUTE = '@@router/LOCATION_CHANGE';
const FETCH_DATA_ERROR = () => null;    // TBD

// this middleware care only for API calls
const getDataMiddleware = ({dispatch}) => next => action => {
  if (action.type === CHANGE_ROUTE) {
    let route = action.payload.location.pathname;
    route = (route === '/') ? '/news' : route;
    const url = `/api${route}`;
    dispatch(apiRequest('GET', url, null, CONVERT_DATA_TO_UI_BLOCK, FETCH_DATA_ERROR));
  }
  return next(action);
};

const convertDataMiddleware = ({dispatch, getState}) => next => action => {
  next(action);
  if (action.type === CONVERT_DATA_TO_UI_BLOCK) {
    let route = getState().router.location.pathname;
    const uiBlockData = convertToUIBlocks(action.payload, route);

    dispatch({type: UPDATE_UI_BLOCKS, payload: uiBlockData})
  }
};


export const dataMiddlewares = [getDataMiddleware, convertDataMiddleware];