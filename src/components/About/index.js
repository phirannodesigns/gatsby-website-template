import React from 'react';
import Image from './Image';

const About = () => (
  <div id="about" className="flex flex-wrap-reverse">
    <div className="flex h-64 md:h-auto overflow-hidden w-full md:w-1/2">
      <div className="h-full w-full relative">
        <div className="image-container">
          <Image />
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center w-full md:w-1/2">
      <div className="max-w-md px-4 py-24 w-full">
        <h2 className="leading-none m-0 pt-2 text-4xl">About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          facilis ipsa temporibus odio expedita delectus dolor optio, natus,
          minus, eos repellat. Aut exercitationem molestias beatae consectetur
          est ea possimus nesciunt.
        </p>
      </div>
    </div>
  </div>
);

export default About;
