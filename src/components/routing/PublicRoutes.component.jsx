import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';
import Layout from '../Layout.component';
import Homepage from '../../pages/Homepage.page';
import Login from '../../pages/Login.page';

// import NotFound from "../../pages/NotFound.component"

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Layout>
          <Homepage />
        </Layout>
      </Route>
      <Route exact path="/login">
        <Layout>
          <Login />
        </Layout>
      </Route>
      <Route path="/implicit/callback" component={LoginCallback} />
      <Route path="*">{/* <NotFound /> */}</Route>
    </Switch>
  );
};

export default PublicRoutes;
