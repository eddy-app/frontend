import React, { useContext } from 'react';

import { UsersContext } from '../context/UsersContext';

const Users = () => {
  const usersContext = useContext(UsersContext);
  const { users } = usersContext;
  const renderUsers = () => {
    if (users) {
      return users.map(user => <div key={user.id}>{user.firstname}</div>);
    } else {
      return <div>Loading....</div>;
    }
  };

  return <>{renderUsers()}</>;
};

export default Users;
