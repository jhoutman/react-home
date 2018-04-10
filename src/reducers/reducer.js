import { handleActions } from 'redux-actions';
import { arrayMove } from 'react-sortable-hoc';

import * as types from '../actionTypes/actionType';

const initialState = {
  // ...defaultState,
  showCompletedToDos: false,
  items: [
    { id: 'abc234234', completed: true, text: 'item 1' },
    { id: 'sdasfsdf1', completed: false, text: 'item 2' }
  ]
};

// export const ADD_TODO = 'ADD_TODO';
// export const TOGGLE_TODO = 'TOGGLE_TODO';
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false
          }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        items: state.items.map(
          todo => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
        )
      };
    case 'SORT_TODO':
      return {
        ...state,
        items: arrayMove(state.items, action.payload.oldIndex, action.payload.newIndex)
      };
    case 'TOGGLE_SHOW_COMPLETED_TODOS':
      return {
        ...state,
        showCompletedToDos: !state.showCompletedToDos
      };
    default:
      return state;
  }
}
