const searchedReducer = (state = [], action) => {
  switch (action.type) {
    case 'HISTORY_SEARCH':
      return action.payload

    default:
      return state
  }
}

export default searchedReducer;
