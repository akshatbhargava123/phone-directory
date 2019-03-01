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

const nameRegex = /^[A-Za-z]$/, phoneRegex = /^[0-9]{10}$/;

class AddPhone extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      nameInputErrorous: false,
      phonenputErrorous: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      [`${name}InputErrorous`]: name === 'name' ? nameRegex.test(value) : !phoneRegex.test(value),
    });
  }

  onAdd() {
    const { name, phone } = this.state;
    if (!nameRegex.test(name) || !phoneRegex.test(phone)) return;
    this.props.history.push('/');
    if (this.props.onAdd) this.props.onAdd(name, phone);
  }

  render() {
    const { name, phone, nameInputErrorous, phonenputErrorous } = this.state;

    return (
      <div>
        <h1>Add New Phone Form</h1>
        <Input
          placeholder="Enter Name"
          name="name"
          onChange={this.onInputChange}
          error={nameInputErrorous}
        />
        <Input
          placeholder="Enter Phone"
          name="phone"
          onChange={this.onInputChange}
          error={phonenputErrorous}
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
