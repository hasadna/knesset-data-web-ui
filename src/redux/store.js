import {createStore} from 'redux';
import {searchReducer} from './reducers/search.reducer';

const store = createStore(searchReducer);

// for dev purpose only
window.store = store;

export default store;