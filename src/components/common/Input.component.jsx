import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef((props, ref) => {
  const { type, name, placeholder, ...otherProps } = props;
  return (
    <>
      <input
        {...otherProps}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
      />
    </>
  );
});

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
