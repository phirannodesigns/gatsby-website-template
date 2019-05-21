import React from 'react';
import Image from './Image';

import Form from '../Form';

const Contact = () => (
  <div id="contact" className="flex flex-wrap-reverse">
    <div className="flex h-128 md:h-auto overflow-hidden relative w-full md:w-1/2">
      <div className="image-container">
        <Image />
      </div>
    </div>
    <div className="flex items-center justify-center w-full md:w-1/2">
      <div className="max-w-md px-4 py-24 w-full">
        <h2 className="font-bold mb-4 text-4xl text-gray-800">Contact</h2>
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
