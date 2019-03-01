import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default class PhoneDirectory extends Component {
  render() {
    return (
      <div>
        <Link to="add"><Button>Add New Phone Record</Button></Link>
      </div>
    )
  }
};
