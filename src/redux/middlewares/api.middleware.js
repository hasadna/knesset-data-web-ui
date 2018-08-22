import {API_REQUEST} from '../actions/api.action';

// this middleware care only for API calls
export const apiMiddleware = ({dispatch}) => next => action => {

  if(action.type === API_REQUEST) {
    const { method, url, onSuccess, onError } = action.meta;

    fetch(url, { method }).then(response => response.json())
      .then((data) => dispatch({ type: onSuccess, payload: data }))
      .catch(error => dispatch({ type: onError, payload: error }))
  }
  return next(action)
};