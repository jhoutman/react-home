import { combineReducers } from 'redux';
import toDo from './reducer/reducer';

const rootReducer = combineReducers({
  toDo
});

export default rootReducer;
