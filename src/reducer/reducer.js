import { handleActions } from 'redux-actions';

import * as types from '../actionType/actionType';
// import defaultState from './advisoryContentDefaultState';

const initialState = {
  // ...defaultState,
  visibilityFilter: false,
  todos: []
};

// export const ADD_TODO = 'ADD_TODO';
// export const TOGGLE_TODO = 'TOGGLE_TODO';
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export default handleActions({
  [types.ADD_TODO]: (state, { payload: item }) => ({
    ...state,
    item
  }),

  initialState
});
