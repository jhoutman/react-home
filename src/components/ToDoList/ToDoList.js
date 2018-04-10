import React from 'react';
import styled from 'styled-components';
import Checkbox from 'material-ui/Checkbox';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import Input from '../Input';

const SortableItem = SortableElement(({ completed, text, onClickToggle, id }) => (
  <StyledListItem completed={completed}>
    <Checkbox onClick={onClickToggle} checked={completed && 'checked'} value={id} />
    {text}
  </StyledListItem>
));

const SortableList = SortableContainer(({ items, onClickToggle }) => (
  <StyledList>
    {items.length ? (
      items.map((item, index) => (
        <SortableItem
          onClickToggle={onClickToggle}
          key={item.id}
          index={index}
          id={item.id}
          completed={item.completed}
          text={item.text}
        />
      ))
    ) : (
      <span style={{ color: 'white' }}>Create an item!</span>
    )}
  </StyledList>
));

const ToDoList = ({
  completedItems,
  uncompletedItems,
  onClickToggleToDo,
  onSortEnd,
  onNewItemKeyPress,
  showCompletedToDos,
  onClickToggleShowCompletedToDos
}) => (
  <div>
    <div style={{ margin: '3px 2px' }}>
      <Input name="newItem" placeholder="Add new item" onKeyPress={onNewItemKeyPress} />
    </div>
    <SortableList
      items={uncompletedItems}
      onSortEnd={onSortEnd}
      onClickToggle={onClickToggleToDo}
    />
    <div style={{ color: 'white' }} onClick={onClickToggleShowCompletedToDos}>
      {showCompletedToDos ? 'completed todos' : 'show completed todos'}
    </div>
    {showCompletedToDos && (
      <div>
        <hr style={{ visibility: 'hidden' }} />
        <StyledList>
          {completedItems.map(item => (
            <StyledListItem completed={item.completed}>
              <Checkbox
                onClick={onClickToggleToDo}
                checked={item.completed && 'checked'}
                value={item.id}
              />
              {item.text}
            </StyledListItem>
          ))}
        </StyledList>
      </div>
    )}
  </div>
);

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledListItem = styled.li`
  color: black;
  padding: 0px;
  background: white;
  margin: 3px 2px;
  border-radius: 3px;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')}
  background: ${({ completed }) => (completed ? '#999' : 'white')}
`;

export default ToDoList;
