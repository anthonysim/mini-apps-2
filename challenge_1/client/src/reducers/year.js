export function yearReducer(state = 0, action) {
  switch (action.type) {
    case 'SEARCHED_YEAR':
      return action.year;

    default:
      return state;
  }
}

export default yearReducer;