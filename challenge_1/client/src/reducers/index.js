import { combineReducers } from 'redux';
import searchedReducer from './searched';
import dataFoundReducer from './dataFound';
import yearReducer from './year';


export default combineReducers({
  searchedReducer,
  dataFoundReducer,
  yearReducer,
});