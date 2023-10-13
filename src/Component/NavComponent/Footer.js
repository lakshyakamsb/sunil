import React from 'react';

const Footer = () => {
  const divStyle = {
    marginTop: '100px',
  };

  const phoneNumber = '7042788829';
  const emailAddress = 'shuddhivigrah@gmail.com';

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };

  const openWhatsAppWithMessage = (message) => {
    const whatsappLink = `https://wa.me/7042788829?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <footer className="bg-success text-light"  style={{ fontFamily: "'AR One Sans', 'Open Sans', sans-serif", fontSize: '20px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 style={divStyle}>Contact Us</h3>
            <a href={`tel:${phoneNumber}`} className="text-light" style={{ textDecoration: 'none' }}>
              <p>+91 {phoneNumber}</p>
            </a>
            <p style={{ cursor: 'pointer' }} onClick={handleEmailClick}>
              Email: {emailAddress}
            </p>
            <div className="col-md-6 mb-3">
              <div className="text-center">
                <a href={`tel:${phoneNumber}`} className="btn btn-danger btn-lg">
                  <i className="fas fa-phone me-2"></i>Call Us
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="text-white">Therapies</h3>
            <ul className="list-unstyled">
              <li>
                <a
                  className="text-white"
                  style={{ textDecoration: 'none' }}
                  href="javascript:void(0);"
                  onClick={() => openWhatsAppWithMessage('I want to book an appointment for Acupressure')}
                >
                  Acupressure
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  href="javascript:void(0);"
                  style={{ textDecoration: 'none' }}
                  onClick={() => openWhatsAppWithMessage('I want to book an appointment for Yoga')}
                >
                  Yoga
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  href="javascript:void(0);"
                  style={{ textDecoration: 'none' }}
                  onClick={() => openWhatsAppWithMessage('I want to book an appointment for Acupuncture')}
                >
                  Acupuncture
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  href="javascript:void(0);"
                  style={{ textDecoration: 'none' }}
                  onClick={() => openWhatsAppWithMessage('I want to book an appointment for Cupping')}
                >
                  Cupping
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  href="javascript:void(0);"
                  style={{ textDecoration: 'none' }}
                  onClick={() => openWhatsAppWithMessage('I want to book an appointment for Reiki')}
                >
                  Reiki
                </a>
                <a
                  className="text-white"
                  href="javascript:void(0);"
                  style={{ textDecoration: 'none' }}
                  onClick={() => openWhatsAppWithMessage('I want to book an appointment for Diet')}
                >
                  Diet
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
