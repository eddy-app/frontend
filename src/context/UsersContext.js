import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import { AuthContext } from './AuthContext';

export const UsersContext = createContext();

export const UsersState = ({ children }) => {
  const authContext = useContext(AuthContext);
  const { authAxios, currentUser } = authContext;
  const [users, setUsers] = useState();

  const fetchUsers = useCallback(async () => {
    try {
      const { data } = await authAxios.get('/users');
      setUsers(data);
    } catch (err) {
      console.log(err.message);
    }
  }, [authAxios]);

  useEffect(() => {
    if (currentUser) fetchUsers();
  }, [currentUser, fetchUsers]);

  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
};
