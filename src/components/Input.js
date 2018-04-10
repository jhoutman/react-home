import React from 'react';
import styled from 'styled-components';

const Input = ({ name, placeholder, value, id, style, onKeyPress, onChange }) => (
  <StyledInput
    onKeyPress={onKeyPress}
    onChange={onChange}
    id={id}
    placeholder={placeholder}
    value={value}
    name={name}
    style={style}
  />
);

const StyledInput = styled.input`
  display: block;
  padding: 16px;
  color: black;
  background: white;
  border-radius: 3px;
  border: 1px;
  width: 100%;
`;

export default Input;
