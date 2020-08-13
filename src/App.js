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
import config from './config/oktaConfig';

library.add(fab, fas, faCheckSquare, faCoffee);

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
