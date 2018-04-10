import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList/ToDoList';
import * as actions from '../actions/action';
import shortid from 'shortid';

const mergeProps = (stateProps, dispatchProps) => {
  const { toggleToDo, sortToDo, addToDo, toggleShowCompletedToDos } = dispatchProps;
  const { items, visibilityFilter, showCompletedToDos } = stateProps;

  const onNewItemKeyPress = event => {
    if (event.key === 'Enter') {
      event.currentTarget.value.trim() &&
        addToDo({ id: shortid(), text: event.currentTarget.value.trim() });
      event.currentTarget.value = '';
    }
  };

  const getCompletedItems = () => items.filter(item => item.completed === true);
  const getUncompletedItems = () => items.filter(item => item.completed === false);

  return {
    onClickToggleToDo: event => {
      toggleToDo({ id: event.target.value });
    },
    onSortEnd: sortToDo,
    onNewItemKeyPress,
    completedItems: getCompletedItems(),
    uncompletedItems: getUncompletedItems(),
    showCompletedToDos,
    onClickToggleShowCompletedToDos: toggleShowCompletedToDos
  };
};

function mapStateToProps({ toDo: { items, visibilityFilter, showCompletedToDos } }) {
  return {
    items,
    visibilityFilter,
    showCompletedToDos
  };
}

export default connect(mapStateToProps, actions, mergeProps)(ToDoList);
