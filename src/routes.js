import Home from "../src/components/home/home";
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
   </Switch>
  );