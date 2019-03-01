import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 18px;
  padding: 10px;
  color: white;
  background: ${props => props.deleteButton ? 'red' : 'black'};
  border-radius: 8px;
  border: 1px solid transparent;
  outline: none;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    color: ${props => props.deleteButton ? 'red' : 'black'};
    background: whitesmoke;
    border: 1px solid ${props => props.deleteButton ? 'red' : 'black'};
  };
`;

export default ({ children, ...props }) => (
  <Button {...props}>{ children }</Button>
);