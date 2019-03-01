import React from 'react';
import { Route } from 'react-router-dom';

import AddPhone from './containers/AddPhone';
import PhoneDirectory from './containers/PhoneDirectory';

export default (props) => (
  <div>
    <Route
      exact
      path="/"
      render={() => (
        <PhoneDirectory
          phoneList={props.phoneList}
          onDelete={props.onDelete}
        />
      )}
    />
    <Route
      path="/add"
      render={() => (
        <AddPhone
          onAdd={props.onAdd}
        />
      )}
    />
  </div>
);
