import React from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { ReactComponent as Illustration } from '../../../images/landr.svg';

// Styles
import {
  billboardContent,
  billboardLeft,
  billboardTitle,
  billboardSentence,
  billRight,
  // name,
} from './Billboard.styles';

const Billboard = () => {
  const { authState } = useOktaAuth();
  const { isAuthenticated } = authState;

  return (
    <section id="billboard">
      <div className={billboardContent}>
        <div className={billboardLeft}>
          <h2 className={billboardTitle}>Meet Eddy</h2>
          <p className={billboardSentence}>
            Manage your devices accross your teams in a one stop shop
            application with the help of <span>eddy</span> your device manager
            helper.
          </p>
          {!isAuthenticated ? (
            <Link to="login">
              <button className="cta-home">Get Started</button>
            </Link>
          ) : (
            <Link to="/dashboard">
              <button className="cta-home">Dashboard</button>
            </Link>
          )}
        </div>
        <div className={billRight}>
          <Illustration alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Billboard;
