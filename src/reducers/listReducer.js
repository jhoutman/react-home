import { arrayMove } from 'react-sortable-hoc';
import shortid from 'shortid';

import { GROCERY_LIST } from '../constants/listConstants';
import * as types from '../actionTypes/actionType';

const initialState = {
  showCompletedToDos: false,
  lists: {
    [GROCERY_LIST]: {
      title: 'Groceries', 
      items: [
        {value: 'aap', id: 'aap1234'}, {value: 'noot', id: 'noot1243'}
      ],
      completedItems: [
        {value: 'mies', id: 'mies123'}, {value: 'siem', id: 'siemrwrwr'}
      ]
    }
  }
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.listName]: {
            ...state.lists[action.payload.listName],
            items: [
              {id: shortid.generate(), value: action.payload.text},
              ...state.lists[action.payload.listName].items
            ]
          }
        }
      };
    case 'COMPLETE_TODO':
    const newCompletedItem = state.lists[action.payload.listName].items.filter(item => action.payload.id === item.id);
    return {
      ...state,
      lists: {
        ...state.lists,
        [action.payload.listName]: {
          ...state.lists[action.payload.listName],
          items: [
            ...state.lists[action.payload.listName].items.filter(item => action.payload.id !== item.id)
          ],
          completedItems: [...newCompletedItem, ...state.lists[action.payload.listName].completedItems]
        }
      }
    };
    case 'UNCOMPLETE_TODO':
      const newUncompletedItem = state.lists[action.payload.listName].completedItems.filter(item => action.payload.id === item.id);
      const newCompletedItems = [...state.lists[action.payload.listName].completedItems.filter(item => action.payload.id !== item.id)];

      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.listName]: {
            ...[action.payload.listName],
            items: [
              ...state.lists[action.payload.listName].items,
              ...newUncompletedItem
            ], 
            completedItems: [...newCompletedItems]
          }
        }
    };
    case 'SORT_TODO':
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.listName]: {
            ...state.lists[action.payload.listName],
            items: [
              ...arrayMove( state.lists[action.payload.listName].items, action.payload.oldIndex, action.payload.newIndex)
            ]
          }
        }
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
