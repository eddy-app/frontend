import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  fas,
} from '@fortawesome/free-solid-svg-icons';

import AppRoutes from './components/routing/AppRoutes.component';

library.add(fab, fas, faCheckSquare, faCoffee);

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
