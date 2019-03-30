import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'
import {dataMiddlewares} from './middlewares/data.middleware'
import {apiMiddleware} from './middlewares/api.middleware'
import createRootReducer from './rootReducer';

export const history = createBrowserHistory();
const store = createStore(
  createRootReducer(history), // root reducer with router state
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      ...dataMiddlewares, 			// for dispatching data get and data conversion
      apiMiddleware   					// for fetching data by API
    ),
  ),
);

// for dev purpose only
window.store = store;

export default store;