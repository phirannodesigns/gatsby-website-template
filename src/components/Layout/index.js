import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import '../../css/tailwind.css';

const Layout = ({ children }) => (
  <div className="antialiased flex flex-col leading-relaxed min-h-screen text-gray-700 w-full">
    <Header />
    <main className="bg-white flex-1 mx-auto w-full">{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
