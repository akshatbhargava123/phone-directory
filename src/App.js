import React, { Component } from 'react';
import styled from 'styled-components';

import Routes from './Routes';
import Header from './components/Header';

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
          <Routes />
        </Body>
      </div>
    );
  }
}

export default App;
