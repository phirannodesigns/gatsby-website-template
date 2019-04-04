import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

const Header = () => (
  <StaticQuery
    query={graphql`
      query ContactQuery {
        site {
          siteMetadata {
            title
            email
            phone
            phoneFormatted
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <div>
          <div className="bg-white flex items-center justify-between max-w-6xl mx-auto px-4 py-2">
            <a href={`tel:${data.site.siteMetadata.phone}`}>
              {data.site.siteMetadata.phoneFormatted}
            </a>
            <a href={`mailto:${data.site.siteMetadata.email}`}>
              {data.site.siteMetadata.email}
            </a>
          </div>
        </div> */}
        <header className="bg-white flex flex-wrap h-24 items-center justify-between leading-none max-w-6xl mx-auto p-4 relative sticky top-0 w-full z-10">
          <div className="text-center w-full sm:w-auto">
            <h1 className="m-0">
              <Link className="hover:no-underline text-3xl" to="/">
                {data.site.siteMetadata.title}{' '}
              </Link>
            </h1>
          </div>
          <nav className="flex flex-1 justify-center sm:justify-end pt-4 sm:p-0">
            <NavLink link="/#about" title="About" />
            <NavLink link="/#services" title="Services" />
            <NavLink link="/#contact" title="Contact" />
          </nav>
        </header>
      </>
    )}
  />
);

const NavLink = props => (
  <a href={props.link} className="ml-4">
    {props.title}
  </a>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
