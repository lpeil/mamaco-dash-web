import React from 'react'
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom'
import { isAuthenticated } from '@/auth'

import LoginPage from '@/pages/auth/login'
import HomePage from '@/pages/home'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
    </Switch>
  </BrowserRouter>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={
      isAuthenticated ? Component : MyRedirect
    }
  />
)

const MyRedirect = ({ location }) => (
  <Redirect to={{ pathname: '/login', state: { from: location } }} />
)

export default Routes
