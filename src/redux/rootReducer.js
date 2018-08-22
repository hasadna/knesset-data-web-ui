import {combineReducers} from 'redux';
import {searchReducer} from './reducers/search.reducer';
import {activeDataReducer} from './reducers/data.reducer';

export const rootReducer = combineReducers({
  activeData: activeDataReducer,
  search: searchReducer
});
