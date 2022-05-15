import React from 'react';

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <section id='footer'>
      <div className='bottom--footer text-white d-flex justify-content-center align-items-center'>
        <h6 className='mb-0' style={{ fontSize: '13px', fontWeight: 'bold' }}>
          &copy; {year} COPYRIGHT SAMTEJ INDUSTRIES LLP
        </h6>
      </div>
    </section>
  );
};

export default Footer;
