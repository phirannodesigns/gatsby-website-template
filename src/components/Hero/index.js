import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Image from './Image';
// import Logo from '../../images/logo.svg';

const Hero = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        site {
          siteMetadata {
            title
            tagline
            phone
            phoneFormatted
            email
          }
        }
      }
    `}
    render={data => (
      <div className="bg-teal-700 flex font-semibold items-center justify-center max-w-6xl mx-auto overflow-hidden relative w-full">
        <div className="image-container opacity-75">
          <Image />
        </div>
        <div className="flex flex-col pb-32 pt-32 px-4 relative rounded text-center w-full md:w-1/2">
          <div className="max-w-xs mx-auto">
            <h1 className="leading-none text-white text-6xl">
              {/* <img
                className="h-32 md:h-48 mx-auto w-auto"
                src={Logo}
                alt={data.site.siteMetadata.title}
              /> */}
              {data.site.siteMetadata.title}
            </h1>
            <p className="leading-tight mb-8 normal-case text-3xl md:text-5xl text-white">
              {data.site.siteMetadata.tagline}
            </p>
            <p>
              <Link
                className="hover:bg-white border-2 border-white leading-none hover:no-underline px-4 py-2 rounded-full text-white hover:text-gray-700"
                to="/#"
              >
                Call to action
              </Link>
            </p>
          </div>
        </div>
      </div>
    )}
  />
);

export default Hero;
