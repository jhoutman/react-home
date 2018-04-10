import { combineReducers } from 'redux';
import toDo from './reducers/reducer';

const rootReducer = combineReducers({
  toDo
});

export default rootReducer;
