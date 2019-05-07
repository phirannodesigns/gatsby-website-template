import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const handleClick = e => {
  e.preventDefault();
  const element = document.getElementById('nav');
  element.classList.toggle('block');
  element.classList.toggle('hidden');
};

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className="bg-white md:flex items-center leading-none relative shadow sticky top-0 w-full z-50">
        {/* Uncomment this section if you want to use a background image
        <div className="image-container opacity-75 relative">
          <Image />
        </div> */}
        <div className="relative">
          <div className="flex justify-between w-full">
            <Link
              to="/"
              className="flex font-bold items-center no-underline px-4 text-lg tracking-tight"
            >
              {data.site.siteMetadata.title}
              {/* Uncomment this section if you want to use a logo instead of text
              <img
                className="h-12 py-2"
                src={Logo}
                alt={data.site.siteMetadata.title}
              /> */}
            </Link>

            <button
              className="flex md:hidden items-center justify-center p-4"
              onClick={handleClick}
              type="button"
            >
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <nav
          id="nav"
          className="hidden md:flex md:flex-1 md:items-center md:justify-end relative w-full md:w-auto"
        >
          <NavLink link="#about" title="About&nbsp;Us" />
          <span className="hidden md:block text-gray-300">|</span>
          <NavLink link="#services" title="Services" />
          <span className="hidden md:block text-gray-300">|</span>
          <NavLink link="#contact" title="Contact" />
        </nav>
      </header>
    )}
  />
);

const NavLink = props => (
  <AnchorLink
    href={props.link}
    className="block border-t md:border-none font-semibold p-4 hover:text-gray-800 text-sm tracking-wide uppercase"
  >
    {props.title}
  </AnchorLink>
);

export default Header;
