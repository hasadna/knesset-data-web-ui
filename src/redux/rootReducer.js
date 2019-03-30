import {combineReducers} from 'redux';
import {searchReducer} from './reducers/search.reducer';
import {uiBlocksReducer} from './reducers/uiBlock.reducer';
import {connectRouter} from 'connected-react-router';

export default (history) => combineReducers({
  router: connectRouter(history),
  uiBlocks: uiBlocksReducer,
  search: searchReducer
});
/*
 state structure:
 {
    router: contain data about current route/path. auto-managed by connected-react-router
 		uiBlocks: {
 			headBlock: object (of class HeadBlockData) | or null
 			topicBlocks: Array (of class TopicBlockData) | 0 or more items
 		}
 }
 */