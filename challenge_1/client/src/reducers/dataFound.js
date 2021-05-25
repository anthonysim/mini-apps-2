export function dataFoundReducer(state = false, action) {
  switch (action.type) {
    case 'DATA_NOT_FOUND':
      return action.dataFound;

    default:
      return state;
  }
}

export default dataFoundReducer;