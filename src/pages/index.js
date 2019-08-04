import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import About from '../components/about';
import Services from '../components/services';
import Gallery from '../components/gallery';
import Contact from '../components/contact';
import Map from '../components/map';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
    <Gallery />
    <Contact />
    <Map />
  </Layout>
);

export default IndexPage;
