import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Gallery = () => (
  <StaticQuery
    query={graphql`
      fragment galleryFluidImage on File {
        childImageSharp {
          fluid(maxWidth: 382) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      query galleryQuery {
        about: file(relativePath: { eq: "about.jpg" }) {
          ...galleryFluidImage
        }
        contact: file(relativePath: { eq: "contact.jpg" }) {
          ...galleryFluidImage
        }
        services: file(relativePath: { eq: "services.jpg" }) {
          ...galleryFluidImage
        }
      }
    `}
    render={data => (
      <div id="gallery">
        <div className="flex items-center justify-center">
          <div className="max-w-lg px-4 py-24 w-full">
            <h2 className="font-bold mb-4 text-4xl text-gray-800">Gallery</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              rem, repellat perspiciatis, officia ut fugiat asperiores odit
              nostrum earum nesciunt ipsam eaque iste? Eos voluptatem omnis,
              esse autem consequuntur delectus.
            </p>
          </div>
        </div>
        <div className="flex justify-around mb-32 w-full">
          <div>
            <Img
              className="h-24 sm:h-48 mx-auto overflow-hidden rounded-full w-24 sm:w-48"
              fluid={data.about.childImageSharp.fluid}
            />
          </div>
          <div>
            <Img
              className="h-24 sm:h-48 mx-auto overflow-hidden rounded-full w-24 sm:w-48"
              fluid={data.services.childImageSharp.fluid}
            />
          </div>
          <div>
            <Img
              className="h-24 sm:h-48 mx-auto overflow-hidden rounded-full w-24 sm:w-48"
              fluid={data.contact.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    )}
  />
);

export default Gallery;
