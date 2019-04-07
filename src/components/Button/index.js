import React from 'react';
import { Link } from 'gatsby';

const Button = props => (
  <p>
    <Link
      className={`border-2 font-bold inline-block leading-none hover:no-underline px-4 py-2 rounded-full
      ${
        props.white
          ? 'hover:bg-white border-white text-white hover:text-gray-700'
          : ''
      }
      ${props.submit ? 'bg-blue-700 hover:bg-blue-600 text-white' : ''}
      ${
        props.danger
          ? 'bg-red-100 hover:bg-red-700 text-red-700 hover:text-white'
          : ''
      }
      `}
      to={props.to}
    >
      {props.children}
    </Link>
  </p>
);

export default Button;
