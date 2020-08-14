import React, { createContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useOktaAuth } from '@okta/okta-react';

const FetchContext = createContext();
const { Provider } = FetchContext;

const FetchProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { authService } = useOktaAuth();
  const { getAccessToken, logout, getUser } = authService;

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

  const fetchAccessToken = useCallback(async () => {
    try {
      const token = await getAccessToken();
      await setAccessToken(token);
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err);
    }
  }, [getAccessToken]);

  const signOut = useCallback(async () => {
    try {
      await logout('/');
      await setIsLoggedIn(false);
      await setCurrentUser(null);
      await setAccessToken(null);
      await localStorage.removeItem('okta-pkce-storage');
      await localStorage.removeItem('okta-cache-storage');
      await localStorage.removeItem('okta-token-storage');
      await sessionStorage.removeItem('okta-pkce-storage');
      await sessionStorage.removeItem('React::DevTools::lastSelection');
    } catch (err) {
      console.log(err);
    }
  }, [logout]);

  const saveUser = useCallback(async () => {
    try {
      if (currentUser) {
        const data = {
          firstname: currentUser.given_name,
          lastname: currentUser.family_name,
        };
        await authAxios.post('/users/auth', data);
      }
    } catch (err) {
      if (err) signOut();
    }
  }, [authAxios, currentUser, signOut]);

  const fetchUser = useCallback(async () => {
    try {
      const user = await getUser();
      await setCurrentUser(user);
      saveUser();
    } catch (err) {
      console.log(err);
    }
  }, [getUser, saveUser]);

  useEffect(() => {
    fetchAccessToken();
    fetchUser();
    setIsLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <Provider
      value={{
        currentUser,
        accessToken,
        isLoggedIn,
        isLoading,
        authAxios,
        signOut,
      }}>
      {children}
    </Provider>
  );
};

export { FetchContext, FetchProvider };
