import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';
import * as actions from '../actions/action';

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { completeToDo, uncompleteToDo, sortToDo, addToDo, toggleShowCompletedToDos } = dispatchProps;
  const { listTitle, uncompletedItems, completedItems, showCompletedToDos } = stateProps;
  const { listName } = ownProps;

  const onNewItemKeyPress = event => {
    if (event.key === 'Enter') {
      event.currentTarget.value.trim() &&
        addToDo({ listName, text: event.currentTarget.value.trim() });
      event.currentTarget.value = '';
    }
  };


  return {
    onClickCompleteToDo: id => {
      completeToDo({listName, ...id});
    },
    onClickUncompleteToDo: id => {
      uncompleteToDo({listName, ...id})
    },
    listTitle,
    onSortEnd: (sorting) => sortToDo({listName, ...sorting}),
    onNewItemKeyPress,
    completedItems,
    uncompletedItems,
    showCompletedToDos,
    onClickToggleShowCompletedToDos: toggleShowCompletedToDos
  };
};

function mapStateToProps(state, {listName}) {
  return {
    listTitle: state.list.lists[listName].title,
    uncompletedItems: state.list.lists[listName].items,
    completedItems: state.list.lists[listName].completedItems,
    showCompletedToDos: state.list.showCompletedToDos
  };
}

export default connect(mapStateToProps, actions, mergeProps)(ToDoList);
