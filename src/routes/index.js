/* eslint react/prop-types: 0 */
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '@/auth';

import LoginPage from '@/pages/login';
import LoginReturnPage from '@/pages/login/return';
import HomePage from '@/pages/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/login/return" exact component={LoginReturnPage} />
    </Switch>
  </BrowserRouter>
);

const MyRedirect = ({ location }) => (
  <Redirect to={{ pathname: '/login', state: { from: location } }} />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Route {...rest} component={isAuthenticated ? Component : MyRedirect} />
);

export default Routes;
