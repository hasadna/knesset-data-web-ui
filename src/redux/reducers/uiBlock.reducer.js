import {UPDATE_UI_BLOCKS} from '../actions/ui.action';

const initState = {
  headBlock: null,
  topicBlocks: []
};

export function uiBlocksReducer(state = initState, action) {
  switch (action.type) {

    case UPDATE_UI_BLOCKS:
      return {headBlock: action.payload.headBlock, topicBlocks: action.payload.topicBlocks,};

    default:
      return state;
  }
}
