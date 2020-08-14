import React, { useEffect, useRef } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

const SignInWidget = ({ onError, onSuccess }) => {
  const el = useRef();

  useEffect(() => {
    const widget = new OktaSignIn({
      baseUrl: process.env.REACT_APP_OKTA_DOMAIN,
      logo: 'logo.svg',
    });

    widget.renderEl({ el: el.current }, onSuccess, onError);
    return () => {
      widget.remove();
    };
  }, [onError, onSuccess]);
  return <div ref={el} />;
};

export default SignInWidget;
