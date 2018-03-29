import React from 'react';
import styled from 'styled-components';
import Checkbox from 'material-ui/Checkbox';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ checked, value }) => (
  <StyledListItem>
    <Checkbox checked={checked} />
    {value}
  </StyledListItem>
));

const SortableList = SortableContainer(({ items }) => (
  <StyledList>
    {items.map((item, index) => (
      <SortableItem key={`item-${index}`} checked={item.checked} value={item.value} />
    ))}
  </StyledList>
));

const ToDoList = ({ items = Array(9).fill({ value: 'lulz', id: '12345', checked: false }) }) => (
  <SortableList items={items} />
);

const StyledList = styled.ul`
  padding: 3px;
  list-style: none;
`;

const StyledListItem = styled.li`
  color: black;
  padding: 0px;
  background: white;
  margin: 1px 2px 0;
  border-radius: 3px;
`;

export default ToDoList;
