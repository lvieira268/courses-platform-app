import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Courses from '../pages/Courses';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/courses" component={Courses} />
  </Switch>
);

export default Routes;
