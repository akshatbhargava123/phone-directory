import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Button from './components/Button';

const Body = styled.div`
  margin: 8px auto;
  width: 50%;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body>
          <Button>Add New Phone Record</Button>
          
        </Body>
      </div>
    );
  }
}

export default App;
