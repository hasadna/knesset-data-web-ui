import {UPDATE_ACTIVE_DATA} from '../actions/data.action';

const initState = {};

export function activeDataReducer(activeData = initState, action) {

  switch (action.type) {

    case UPDATE_ACTIVE_DATA:
      return action.payload;

    default:
      return activeData;
  }
}
