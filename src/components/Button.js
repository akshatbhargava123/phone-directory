import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 18px;
  padding: 10px;
  color: white;
  background: black;
  border-radius: 8px;
  border: none;
  outline: none;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    color: black;
    background: whitesmoke;
    border: 1px solid black;
    box-shadow: 1px 1px 0.5px 0.5px black;
  };
`;

export default ({ onClick, children, styles }) => (
  <Button
    onClick={onClick}
    style={{ ...styles }}
  >{ children }</Button>
);