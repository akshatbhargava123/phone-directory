import React, { Component } from 'react'
import styled from 'styled-components';
import Input from '../components/Input';

const SubHeading = styled.h4`
  color: black;
  font-weight: 300;
  font-size: 20px;
`;



export default class AddPhone extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
      </div>
    )
  }
};
