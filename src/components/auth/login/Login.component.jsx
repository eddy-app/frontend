import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import OktaAuth from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

const Login = () => {
  const history = useHistory();
  const [sessionToken, setSessionToken] = useState();
  const { authService } = useOktaAuth();
  const { redirect } = authService;

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
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
          <input
            type="email"
            name="email"
            ref={register}
            placeholder="Enter Email..."
          />
          {errors.email && <span>Email is required</span>}
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            ref={register}
            placeholder="Enter Password..."
          />
          {errors.username && <span>Username is required</span>}
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
