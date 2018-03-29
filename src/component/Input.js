import React from 'react';
import styled from 'styled-components';

const Input = ({ name, placeholder, value, id, style }) => (
  <StyledInput id={id} placeholder={placeholder} value={value} name={name} style={style} />
);

const StyledInput = styled.input`
  padding: 3px;
  border: 1px solid #999;
  border-radius: 3px;
`;

export default Input;
