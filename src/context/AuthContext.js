import React, { createContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useOktaAuth } from '@okta/okta-react';

export const AuthContext = createContext();

export const AuthState = ({ children }) => {
  const { authService } = useOktaAuth();
  const { getAccessToken, logout, getUser, _oktaAuth } = authService;
  const [accessToken, setAccessToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
        _oktaAuth.session.refresh();
      }
      return Promise.reject(err);
    }
  );

  const fetchAccessToken = useCallback(async () => {
    try {
      const token = await getAccessToken();
      await setAccessToken(token);
      await setIsLoggedIn(true);
    } catch (err) {
      return err;
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
      return err;
    }
  }, [logout]);

  const saveUser = useCallback(
    async user => {
      try {
        const data = {
          firstname: user.given_name,
          lastname: user.family_name,
        };
        await authAxios.post('/users/auth', data);
      } catch (err) {
        await signOut();
        return err;
      }
    },
    [authAxios, signOut]
  );

  const fetchUser = useCallback(async () => {
    try {
      const user = await getUser();
      await setCurrentUser(user);
      await saveUser(user);
    } catch (err) {
      console.log(err);
    }
  }, [getUser, saveUser]);

  useEffect(() => {
    fetchAccessToken();

    if (accessToken) {
      fetchUser();
      setIsLoading(false);
    }
    // eslint-disable-next-line
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        accessToken,
        isLoggedIn,
        isLoading,
        authAxios,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
