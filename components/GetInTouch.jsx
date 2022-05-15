import { FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';

const GetInTouch = () => {
  return (
    <div
      className='d-flex justify-content-center flex-column align-items-center product-modal p-3'
      style={{ color: '#b8c1ec' }}>
      <h1>Get in Touch with us!</h1>
      <span style={{ fontSize: '1rem' }}>
        <FaPhoneAlt
          className='me-2'
          style={{ width: '25px', height: '25px', color: '#b8c1ec' }}
        />
        For Enquiries regarding the products, please Contact us at
        <a href='tel:8796666160' rel='noreferrer'>
          {' '}
          8796666160
        </a>{' '}
        /
        <a href='tel:9822214198' rel='noreferrer'>
          {' '}
          9822214198
        </a>{' '}
        or
        <Link href='/#contact'> send us a mail!</Link>
      </span>
      <span style={{ fontSize: '1.25rem', paddingTop: '20px' }}>
        To check out more Products, visit our {''}
        <Link
          className='ms-1'
          href='https://www.indiamart.com/samtej-industries/'
          target='_blank'
          rel='noreferrer'>
          India Mart Page
        </Link>
      </span>
    </div>
  );
};

export default GetInTouch;
