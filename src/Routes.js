import React from 'react';
import { Route } from 'react-router-dom';

import AddPhone from './containers/AddPhone';
import PhoneDirectory from './containers/PhoneDirectory';

export default () => (
  <div>
    <Route path="/" component={PhoneDirectory}/>
    <Route path="/add" component={AddPhone} />
  </div>
);
