import { combineReducers } from 'redux';
import searchedReducer from './searched';
import dataFoundReducer from './dataFound';


export default combineReducers({
  searchedReducer,
  dataFoundReducer,
});