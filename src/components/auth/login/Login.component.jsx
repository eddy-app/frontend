import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import SignInWidget from '../sign-in-widget/SignInwidget.component';

const Login = () => {
  const { authService, authState } = useOktaAuth();
  const { isPending, isAuthenticated } = authState;
  console.log(authService);
  const { redirect } = authService;

  const onSuccess = res => {
    if (res.status === 'SUCCESS') {
      redirect({
        sessionToken: res.session.token,
      });
    } else {
      // The user can be in another authentication state that requires further action.
      // For more information about these states, see:
      //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
    }
  };

  const onError = err => {
    console.log('error logging in', err);
  };

  if (isPending) return null;
  return isAuthenticated ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <SignInWidget onSuccess={onSuccess} onError={onError} />
  );
};

export default Login;
