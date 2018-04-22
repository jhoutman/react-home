import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';
import * as actions from '../actions/action';

const mergeProps = (stateProps, dispatchProps) => {
  const { completeToDo, uncompleteToDo, sortToDo, addToDo, toggleShowCompletedToDos } = dispatchProps;
  const { items, completedItems, showCompletedToDos } = stateProps;

  const onNewItemKeyPress = event => {
    if (event.key === 'Enter') {
      event.currentTarget.value.trim() &&
        addToDo({ text: event.currentTarget.value.trim() });
      event.currentTarget.value = '';
    }
  };

  return {
    onClickCompleteToDo: id => {
      completeToDo(id);
    },
    onClickUncompleteToDo: id => {
      uncompleteToDo(id)
    },
    onSortEnd: sortToDo,
    onNewItemKeyPress,
    completedItems,
    uncompletedItems: items,
    showCompletedToDos,
    onClickToggleShowCompletedToDos: toggleShowCompletedToDos
  };
};

function mapStateToProps({ list: { items, completedItems, showCompletedToDos } }) {
  return {
    items,
    completedItems,
    showCompletedToDos
  };
}

export default connect(mapStateToProps, actions, mergeProps)(ToDoList);
