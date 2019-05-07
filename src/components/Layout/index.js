import React from 'react';

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

export default Layout;
