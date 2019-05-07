import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Location from '../components/Location';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <About />
    <Services />
    <Gallery />
    <Contact />
    <Location />
  </Layout>
);

export default IndexPage;
