import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';

const SubHeading = styled.h4`
  color: black;
  font-weight: 300;
  font-size: 20px;
`;

class AddPhone extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onAdd() {
    this.props.history.push('/');
    if (this.props.onAdd) this.props.onAdd(this.state.name, this.state.phone);
  }

  render() {
    const { name, phone } = this.state;

    return (
      <div>
        <h1>Add New Phone Form</h1>
        <Input
          placeholder="Enter Name"
          name="name"
          onChange={this.onInputChange}
        />
        <Input
          placeholder="Enter Phone"
          name="phone"
          onChange={this.onInputChange}
        />
        <SubHeading>Subcriber to be added</SubHeading>
        <div>Name: <b>{ name }</b></div>
        <div>Phone: <b>{ phone }</b></div>
        <Button
          style={{ width: '90%', margin: '12px auto' }}
          onClick={this.onAdd}
        >
          Confirm
        </Button>
      </div>
    )
  }
};

export default withRouter(AddPhone);
