import React from 'react';
import Navbar from '../components/navbar/Navbar.component';
import LoginForm from '../components/auth/login-form/LoginForm.component';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
