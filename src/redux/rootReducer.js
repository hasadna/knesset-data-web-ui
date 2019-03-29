import {combineReducers} from 'redux';
import {searchReducer} from './reducers/search.reducer';
import {uiBlocksReducer} from './reducers/uiBlock.reducer';

export const rootReducer = combineReducers({
  uiBlocks: uiBlocksReducer,
  search: searchReducer
});

/*
 state structure:
 {
    router: contain data about current route/path. auto-managed by connected-react-router
 		activeData: whatever returned from the server, as-is
 		uiBlocks: {
 			headBlock: object (of class HeadBlockData) | or null
 			topicBlocks: Array (of class TopicBlockData) | 0 or more items
 			protocolBlock: object (of class ProtocolBlockData) | or null
 		}
 }
 */