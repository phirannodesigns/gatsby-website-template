import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SuccessPage = () => (
  <Layout>
    <SEO title="Success: message sent" />
    <div className="flex items-center justify-center mx-auto w-full">
      <div className="max-w-sm p-4">
        <h2 className="leading-none m-0 pt-2 text-4xl">
          Form submitted successfully!
        </h2>
        <p>
          Thank you for your message. We will get back to you as soon as we can.
        </p>
        <p>
          <Link
            className="bg-blue-700 hover:bg-blue-600 cursor-pointer font-semibold leading-none px-4 py-2 rounded-full text-white text-xs tracking-wide uppercase"
            to="/"
          >
            Return to home
          </Link>
        </p>
      </div>
    </div>
  </Layout>
);

export default SuccessPage;
