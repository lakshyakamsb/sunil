import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-success text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>+91 7042788829</p>
            <p>Email: shuddhivigrah@gmail.com</p>
            
            <div className="col-md-6 mb-3">
              <div className="text-center">
                <a href="tel:7042788829" className="btn btn-danger btn-lg">
                  <i className="fas fa-phone me-2"></i>Call Us
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className='text-white'>Therapies</h3>
            <ul className="list-unstyled">
              <li>
                <a className='text-white' href="#">Acupressure</a>
              </li>
              <li>
                <a className='text-white' href="#">Cupping Therapy</a>
              </li>
              <li>
                <a className='text-white' href="#">Reflexology</a>
              </li>
              <li>
                <a className='text-white' href="#">Magnet Therapy</a>
              </li>
              <li>
                <a className='text-white' href="#">Moxibustion</a>
              </li>
              <li>
                <a className='text-white' href="#">Auricular Therapy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
