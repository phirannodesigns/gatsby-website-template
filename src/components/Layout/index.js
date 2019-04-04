/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import '../../css/tailwind.css';
import '../../css/typography.css';
import '../../css/global.css';

const Layout = ({ children }) => (
  <div className="body antialiased flex flex-col min-h-screen text-gray-700">
    <Header />
    <main className="bg-white flex-1 max-w-6xl mx-auto w-full">{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
