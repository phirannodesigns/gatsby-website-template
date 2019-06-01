import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Button = ({ white, submit, danger, to, children }) => (
  <p>
    <Link
      className={`border-2 font-bold inline-block leading-none hover:no-underline px-4 py-2 rounded-full
      ${
        white
          ? 'hover:bg-white border-white text-white hover:text-gray-700'
          : ''
      }
      ${submit ? 'bg-blue-700 hover:bg-blue-600 text-white' : ''}
      ${
        danger
          ? 'bg-red-100 hover:bg-red-700 text-red-700 hover:text-white'
          : ''
      }
      `}
      to={to}
    >
      {children}
    </Link>
  </p>
);

Button.propTypes = {
  white: PropTypes.bool,
  submit: PropTypes.string,
  danger: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
