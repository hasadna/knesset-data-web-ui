import {initialState} from '../state';

export const searchReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SEARCH_FOR':
      return {...state, searchQuery: action.payload};

      case 'SEARCH_RESULTS':
      return {...state, searchResults: state.searchResults.push(action.payload)};

    default:
      return state;
  }
};