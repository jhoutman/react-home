import { arrayMove } from 'react-sortable-hoc';
import shortid from 'shortid';

import * as types from '../actionTypes/actionType';

const initialState = {
  showCompletedToDos: false,
  items: [
   {value: 'aap', id: 'aap1234'}, {value: 'noot', id: 'noot1243'}
  ],
  completedItems: [
    {value: 'mies', id: 'mies123'}, {value: 'siem', id: 'siemrwrwr'}
  ]
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        items: [
          {id: shortid.generate(), value: action.payload.text},
          ...state.items
        ]
      };
    case 'COMPLETE_TODO':
    const newCompletedItem = state.items.filter(item => action.payload.id === item.id);
      return {
        ...state,
        items: [
          ...state.items.filter(item => action.payload.id !== item.id)
        ], 
        completedItems: [...newCompletedItem, ...state.completedItems]

      };
    case 'UNCOMPLETE_TODO':
      const newUncompletedItem = state.completedItems.filter(item => action.payload.id === item.id);
      const newCompletedItems = [...state.completedItems.filter(item => action.payload.id !== item.id)];

      return {
        ...state,
        items: [
          ...state.items,
          ...newUncompletedItem
        ], 
        completedItems: [...newCompletedItems]

      };
    case 'SORT_TODO':
      return {
        ...state,
        items: [...arrayMove(state.items, action.payload.oldIndex, action.payload.newIndex)]
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
