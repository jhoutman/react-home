import { createAction as create } from 'redux-actions';
import * as types from '../actionTypes/actionType';

export const addToDo = create(types.ADD_TODO);
export const toggleToDo = create(types.TOGGLE_TODO);
export const sortToDo = create(types.SORT_TODO);
export const toggleShowCompletedToDos = create(types.TOGGLE_SHOW_COMPLETED_TODOS);