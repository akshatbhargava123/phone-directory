import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Table from '../components/Table';

export default class PhoneDirectory extends Component {
  render() {
    return (
      <div>
        <Link to="add">
          <Button>Add New Phone Record</Button>
        </Link>
        <Table records={this.props.phoneList} onDelete={this.props.onDelete} />
      </div>
    )
  }
};
