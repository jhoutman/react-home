import { combineReducers } from 'redux';

import list from './reducers/listReducer';
import recipe from './reducers/recipeReducer';

const rootReducer = combineReducers({
  list,
  recipe
});

export default rootReducer;
