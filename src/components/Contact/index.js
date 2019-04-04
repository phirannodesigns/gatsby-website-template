import React from 'react';
import Image from './Image';

import Form from '../Form';

const Contact = () => (
  <div id="contact" className="flex flex-wrap-reverse">
    <div className="flex h-128 md:h-auto overflow-hidden w-full md:w-1/2">
      <div className="h-full w-full relative">
        <div className="image-container">
          <Image />
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center w-full md:w-1/2">
      <div className="max-w-md px-4 py-24 w-full">
        <h2 className="leading-none m-0 pt-2 text-4xl">Contact</h2>
        <p>
          Send us a photo and we will do a quote for you without the need to
          bring your car in!
        </p>
        <Form />
      </div>
    </div>
  </div>
);

export default Contact;
