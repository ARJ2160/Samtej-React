import { FaFacebook, FaLinkedin, FaShoppingCart } from 'react-icons/fa';
import React, { useState } from 'react';

// const Map = lazy(() => import('./Map'));

const Contact = () => {
  //Form settings
  const initialState = {
    Email: '',
    Message: '',
  };
  const [formValues, setFormValue] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //Send Message to Google Form
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbwSvKDcmiZnSIIf-s4wQN48eGdZFfx9X9NEnLqwkbmoUxjivdbi5HEs80AcR5mBy1l0qA/exec';
  if (typeof window !== 'undefined') {
    const form = document.forms['google-sheet'];
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValues, [name]: value });
  };

  const validate = (e, formValues) => {
    e.preventDefault();
    const errors = {};
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!formValues.Email) {
      errors.Email = 'Email is Required';
    } else if (!regex.test(formValues.Email)) {
      errors.Email = 'Enter valid Email';
    }
    if (!formValues.Message) {
      errors.Message = 'Message is Required';
    }

    //Check if there are no errors
    if (Object.keys(errors).length === 0) {
      handleSubmit();
      setIsSubmit(true);
    }
    return errors;
  };

  const handleSubmit = () => {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) }).catch(
      (error) => console.error('Error!', error.message)
    );

    setFormValue({ Email: '', Message: '' });
  };

  return (
    <section
      id='contact'
      className='text-white side-padding pb-5'
      style={{ height: 'auto' }}>
      <div data-aos='fade-up'>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className='text-white message-text'>
            Message Sent Successfully
          </div>
        ) : (
          ''
        )}
        <span className='contact--text bold-heading'>Contact Us</span>
        <div className='row me-0'>
          <div className='form p-3'>
            <form method='post' className='flex-column' name='google-sheet'>
              <input
                className='txt-field'
                type='text'
                name='Email'
                placeholder='Email*'
                value={formValues.Email}
                onChange={handleChange}
                autoComplete='off'
              />
              <p className='form-errors'>{formErrors.Email}</p>
              <input
                className='txt-field mt-5'
                type='text'
                name='Message'
                placeholder='Message*'
                value={formValues.Message}
                onChange={handleChange}
                autoComplete='off'
              />
              <p className='form-errors'>{formErrors.Message}</p>
              <button
                onClick={(e) => {
                  setFormErrors(validate(e, formValues));
                }}
                type='submit'
                className='submit-btn mt-3'>
                Send Mail
              </button>
            </form>

            <div className='contact--find-us pt-5'>
              <span className='bold-heading contact--find-text'>Find Us</span>
              <div className='contact--address mt-4'>
                <h1>Address</h1>
                <span className='lead'>
                  Samtej Industries LLP,
                  <br /> 69/1, Shripati complex Vagdaon-Dhayari TEL EXCH.
                  BLDG.,
                  <br /> Vagdaon (BK), Pune - 411041
                  <br />
                  Landmark : Next to Axis Bank or Dhareshwar Mangal Karyalaya,
                  Dhayari Phata
                </span>
              </div>
            </div>
            <div className='contact--bottom-container'>
              <div className='contact--social-media pt-5'>
                <h1>Social Media</h1>
                <div className='footer--social--icons d-flex'>
                  <a
                    href='https://www.facebook.com/SanjayJoshiSLK/'
                    style={{ color: '#ffffff' }}
                    target='_blank'
                    rel='noreferrer'>
                    <FaFacebook
                      className='img-fluid me-5 mt-4'
                      style={{ width: '40px', height: '40px' }}
                    />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/sanjay-joshi-339ab126?fromQR=1'
                    style={{ color: '#ffffff' }}
                    target='_blank'
                    rel='noreferrer'>
                    <FaLinkedin
                      className='img-fluid me-5 mt-4'
                      style={{ width: '40px', height: '40px' }}
                    />
                  </a>
                  <a
                    href='https://www.indiamart.com/samtej-industries/'
                    style={{ color: '#ffffff' }}
                    target='_blank'
                    rel='noreferrer'>
                    <FaShoppingCart
                      className='img-fluid me-5 mt-4'
                      style={{ width: '40px', height: '40px' }}
                    />
                  </a>
                </div>
              </div>
              <div className='contact--number pt-5'>
                <h1>Contact Details</h1>
                <div className='contact--mail-nos mt-3'>
                  <span className='lead' style={{ fontSize: '16px' }}>
                    samtejindustriesllp@gmail.com
                    <br />
                    9822214198
                    <br />
                    8796666160
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <Suspense fallback={<h1 className="text-white">Still Loading…</h1>}>
            <Map />
          </Suspense> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
