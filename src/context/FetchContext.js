import React, { createContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useOktaAuth } from '@okta/okta-react';

const FetchContext = createContext();
const { Provider } = FetchContext;

const FetchProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState();
  const { authService } = useOktaAuth();
  const { getAccessToken } = authService;

  const fetchAccessToken = useCallback(async () => {
    try {
      const token = await getAccessToken();
      setAccessToken(token);
    } catch (err) {
      console.log(err);
    }
  }, [getAccessToken]);

  useEffect(() => {
    fetchAccessToken();
  }, [fetchAccessToken]);

  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  authAxios.interceptors.request.use(
    config => {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );

  authAxios.interceptors.response.use(
    res => {
      return res;
    },
    err => {
      const code = err && err.response ? err.response.status : 0;
      if (code === 401) {
        getAccessToken();
      }
      return Promise.reject(err);
    }
  );

  const saveUser = async user => {
    try {
      await authAxios.post('/users', user);
    } catch (err) {
      console.log(err);
    }
  };

  return <Provider value={{ authAxios, saveUser }}>{children}</Provider>;
};

export { FetchContext, FetchProvider };
