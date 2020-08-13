import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';
import Homepage from '../../pages/Homepage.component';
import Login from '../auth/login/Login.component';

// import NotFound from "../../pages/NotFound.component"

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={Login} />
      <Route path="/implicit/callback" component={LoginCallback} />
      <Route path="*">{/* <NotFound /> */}</Route>
    </Switch>
  );
};

export default PublicRoutes;
