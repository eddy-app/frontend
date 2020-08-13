import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  fas,
} from '@fortawesome/free-solid-svg-icons';

import AppRoutes from './components/routing/AppRoutes.component';

library.add(fab, fas, faCheckSquare, faCoffee);

const config = {
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  issuer: `${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  redirectUri: `${window.location.origin}/implicit/callback`,
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
};

const App = () => {
  return (
    <Router>
      <Security {...config}>
        <AppRoutes />
      </Security>
    </Router>
  );
};

export default App;
