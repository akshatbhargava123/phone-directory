import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 22px;
  padding: 14px;
  margin: 6px 0px;
  outline: none;
  border: 1px solid grey;
  border-radius: 4px;
  width: 58%;
  transition: all 0.3s;
  &:focus {
    box-shadow: 1px 1px 1px 1px grey;
  }
`;

export default (props) => (
  <Input {...props} />
);