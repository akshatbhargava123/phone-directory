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
    this.state = { phoneList: [] };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.initFromStorage = this.initFromStorage.bind(this);
    this.updateInStorage = this.updateInStorage.bind(this);
  }

  componentDidMount() {
    this.initFromStorage();
  }

  initFromStorage() {
    const phoneList = localStorage.getItem('phone-list');
    if (phoneList) this.setState({ phoneList: JSON.parse(phoneList) });
  }

  updateInStorage() {
    localStorage.setItem('phone-list', JSON.stringify(this.state.phoneList));
  }

  onAdd(name, phone) {
    const { phoneList } = this.state;
    this.setState({
      phoneList: phoneList.concat({ name, phone })
    }, this.updateInStorage);
  }

  onDelete(index) {
    const [...phoneList] = this.state.phoneList;
    phoneList.splice(index, 1);
    this.setState({ phoneList }, this.updateInStorage);
  }

  render() {
    const { phoneList } = this.state;
    return (
      <div>
        <Header />
        <Body>
          <Routes onAdd={this.onAdd} phoneList={phoneList} onDelete={this.onDelete} />
        </Body>
      </div>
    );
  }

}

export default App;
