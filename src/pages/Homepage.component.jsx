import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar.component';
import Billboard from '../components/homepage-components/billboard/Billboard.component';
import Pricing from '../components/homepage-components/pricing/Pricing.component';

const Homepage = () => {
  const { authState } = useOktaAuth();
  const { isAuthenticated } = authState;
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) history.push('/dashboard');
  }, [history, isAuthenticated]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Billboard />
      </div>
      <Pricing />
    </>
  );
};

export default Homepage;
