import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import OktaAuth from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

import { AuthContext } from '../../../context/AuthContext';
import Input from '../../common/Input.component';
import FormError from '../../common/FormError.component';

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
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          <Input
            type="email"
            name="email"
            placeholder="Enter Email..."
            ref={register}
          />
          {errors.email && <FormError message="Email is required" />}
        </label>
        <label htmlFor="password">
          <Input
            type="password"
            name="password"
            placeholder="Enter Password..."
            ref={register}
          />
          {errors.username && <FormError message="Username is required" />}
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
