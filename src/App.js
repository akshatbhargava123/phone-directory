import React, { Component } from 'react';
import styled from 'styled-components';

import Routes from './Routes';
import Header from './components/Header';

const Body = styled.div`
  margin: 8px auto;
  width: 50%;
  text-align: center;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phoneList: []
    };
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd(name, phone) {
    this.setState({ phoneList: this.state.phoneList.concat({ name, phone }) });
  }

  render() {
    const { phoneList } = this.state;
    return (
      <div>
        <Header />
        <Body>
          <Routes onAdd={this.onAdd} phoneList={phoneList} />
        </Body>
      </div>
    );
  }

}

export default App;
