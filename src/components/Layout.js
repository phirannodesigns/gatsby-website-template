import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Footer from './Footer';

import '../css/tailwind.css';

const Layout = ({ children }) => (
  <div className="antialiased flex flex-col leading-relaxed min-h-screen text-gray-700">
    <Navbar />
    <main className="bg-white flex flex-1 flex-col mx-auto w-full">
      {children}
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
