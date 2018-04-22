import React from 'react';
import styled from 'styled-components';
import Checkbox from 'material-ui/Checkbox';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

import Input from './Input';

const SortableItem = SortableElement(({ completed, text, id, onClickAction, index }) => (
  <StyledListItem completed={completed}>
    <Checkbox onClick={() => onClickAction({id})} checked={completed && 'checked'} value={index} />
    {text}
  </StyledListItem>
));

const SortableList = SortableContainer(({ items, onClickAction }) => (
  <StyledList>
    {items.length ? (
      items.map((item, index) => (
        <SortableItem
          onClickAction={onClickAction}
          key={item.id}
          id={item.id}
          index={index}
          completed={false}
          text={item.value}
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
  onClickCompleteToDo,
  onClickUncompleteToDo,
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
      onClickAction={onClickCompleteToDo}
      helperClass="is-sorting"
    />
    <div>
      <StyledToggleLink onClick={onClickToggleShowCompletedToDos}>{showCompletedToDos ? 'completed todos' : 'show completed todos'}</StyledToggleLink>
    </div>
    {showCompletedToDos && (
      <div>
        <hr style={{ visibility: 'hidden' }} />
        <StyledList>
          {completedItems.map((item,index) => (
            <StyledListItem completed={true} key={item.id}>
              <Checkbox
                checked="checked"
                onClick={() => onClickUncompleteToDo({id: item.id})}
              />
              {item.value}
            </StyledListItem>
          ))}
        </StyledList>
      </div>
    )}
  </div>
);

const StyledToggleLink = styled.span`
  color: white;
  cursor: pointer;
  display: inline-block;
  padding: 4px;
  margin: 8px 0; 
  background: rgba(255,255,255,0.2);

  &:hover,
  &:active {
    color: purple;
    background: rgba(255,255,255,0.8);
  }
`

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
  border-radius: 3px;list-style: none;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  background: ${({ completed }) => (completed ? 'rgba(255,255,255,0.6)' : 'white')};

  &.is-sorting {
    background: hotpink !importantl
    width: 98%;
    margin-left: 2%;
    box-shadow: 10px 10px 37px 0px rgba(0,0,0,0.54);
  }
`;

export default ToDoList;
