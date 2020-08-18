import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import OktaAuth from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/navbar/Navbar.component';
import LoginForm from '../components/auth/login-form/LoginForm.component';
import { ReactComponent as Logo } from '../images/logo-login.svg';

const Login = () => {
  const history = useHistory();
  const [sessionToken, setSessionToken] = useState();
  const { authService } = useOktaAuth();
  const { redirect } = authService;
  const authContext = useContext(AuthContext);
  const { isLoggedIn, currentUser } = authContext;

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (currentUser && isLoggedIn) history.push('/dashboard');
  });

  const onSubmit = async data => {
    try {
      const oktaAuth = new OktaAuth({
        issuer: process.env.REACT_APP_OKTA_DOMAIN,
      });

      const res = await oktaAuth.signIn({
        username: data.email,
        password: data.password,
      });

      const sessionToken = await res.sessionToken;
      setSessionToken(sessionToken);
      await redirect({ sessionToken });

      history.push('/dashboard');
    } catch (err) {
      console.log('Found an error', err);
    }
  };

  if (sessionToken) return null;
  return (
    <>
      <Navbar />
      <div className="container mx-auto  flex flex-col items-center justify-start mt-24">
        <div className="w-1/6 h-16 flex flex-row items-baseline justify-around">
          <Logo />
        </div>
        <LoginForm
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </div>
    </>
  );
};

export default Login;
