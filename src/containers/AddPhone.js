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

const nameRegex = /^[A-Za-z]+$/, phoneRegex = /^[0-9]{10}$/;

class AddPhone extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      nameInputErrorous: false,
      phoneInputErrorous: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      [`${name}InputErrorous`]: name === 'name' ? !nameRegex.test(value) : !phoneRegex.test(value),
    }, () => console.log(name, value, this.state[`${name}InputErrorous`]));
  }

  onAdd() {
    const { name, phone, nameInputErrorous, phoneInputErrorous } = this.state;
    if (nameInputErrorous || phoneInputErrorous) return;
    if (name === '') return this.setState({ nameInputErrorous: true });
    if (phone === '') return this.setState({ phoneInputErrorous: true });
    this.props.history.push('/');
    if (this.props.onAdd) this.props.onAdd(name, phone);
  }

  render() {
    const { name, phone, nameInputErrorous, phoneInputErrorous } = this.state;

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
          error={phoneInputErrorous}
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
        <Button
          style={{ width: '90%', margin: '12px auto' }}
          onClick={() => this.props.history.replace('/')}
        >
          Cancel
        </Button>
      </div>
    )
  }
};

export default withRouter(AddPhone);
