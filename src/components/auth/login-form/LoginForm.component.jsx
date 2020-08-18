import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../common/Input.component';
import FormError from '../../common/FormError.component';

const LoginForm = ({ onSubmit, register, handleSubmit, errors }) => {
  return (
    <form
      className="w-1/4 h-40 flex flex-col justify-between m-auto mt-8 "
      onSubmit={handleSubmit(onSubmit)}>
      <Input
        className="h-10 p-4 border border-input-border rounded-sm"
        type="email"
        name="email"
        placeholder="Enter Email..."
        ref={register}
      />
      {errors.email && <FormError message="Email is required" />}
      <Input
        className="h-10 p-4 border border-input-border rounded-sm"
        type="password"
        name="password"
        placeholder="Enter Password..."
        ref={register}
      />
      {errors.username && <FormError message="Username is required" />}
      <input
        className="h-10 bg-primary hover:bg-hover transition-all duration-500 ease-in-out text-white font-medium antialiased cursor-pointer outline-none rounded-sm"
        type="submit"
        value="Login"
      />
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default LoginForm;
