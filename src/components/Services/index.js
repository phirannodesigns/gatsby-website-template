import React from 'react';
import Image from './Image';

const Services = () => (
  <div id="services" className="flex flex-wrap">
    <div className="flex items-center justify-center w-full md:w-1/2">
      <div className="max-w-md px-4 py-24 w-full">
        <h2 className="font-bold mb-4 text-4xl text-gray-800">Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ut
          ipsam aperiam exercitationem natus placeat vitae corporis possimus
          dolorem aspernatur. Alias ipsam ut nulla in quo veritatis omnis
          voluptatibus aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          nisi harum magni tenetur laboriosam asperiores facere distinctio
          doloremque dolorum. Sapiente a ratione ex eos harum minus repellendus
          qui numquam distinctio.
        </p>
      </div>
    </div>
    <div className="flex h-64 md:h-auto overflow-hidden relative w-full md:w-1/2">
      <div className="image-container">
        <Image />
      </div>
    </div>
  </div>
);

export default Services;
