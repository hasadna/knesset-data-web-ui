const initState = {};

export const searchReducer = (state = initState, action) => {

  switch (action.type) {
    case 'SEARCH_FOR':
      return {...state, searchQuery: action.payload};

    case 'SEARCH_RESULTS':
      return {...state, searchResults: state.searchResults.push(action.payload)};

    default:
      return state;
  }
};