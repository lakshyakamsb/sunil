import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function generateWhatsAppLink() {
    const encodedMessage = encodeURIComponent(`Hi ${name}, ${message}`);
    const whatsappLink = `https://wa.me/7042788829?text=${encodedMessage}`;
    window.location.href = whatsappLink;
  }
  const divStyle = {
    marginTop: '150px',
  };

  return (
    <div>
      <form action="#" id="form" className="form-group"style={divStyle}>
       
        <div className="form-group mb-3">
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            id="phone"
            className="form-control"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <textarea
            id="message"
            cols="30"
            rows="5"
            className="form-control"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="text-end">
          <button
            type="button"
            className="btn btn-primary"
            onClick={generateWhatsAppLink}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
        </div>
      </form>
      <div className="container py-5">
        <div className="row">
          {/* WhatsApp Button */}
          <div className="col-md-6 mb-3">
            <div className="text-center">
              <a
                href="https://www.facebook.com/shuddhivigrah.wellness"
                target="blank"
                className="btn btn-primary btn-lg"
              >
                <i className="fab fa-facebook me-2"></i>Facebook
              </a>
            </div>
          </div>

          {/* Instagram Button */}
          <div className="col-md-6 mb-3">
            <div className="text-center">
              <a
                href="https://instagram.com/shudhhivigrah?igshid=NTc4MTIwNjQ2YQ=="
                target="blank"
                className="btn btn-primary btn-lg"
              >
                <i className="fab fa-instagram me-2"></i>Instagram
              </a>
            </div>
          </div>

          {/* Phone Call Button */}
          <div className="col-md-6 mb-3">
            <div className="text-center">
              <a href="tel:7042788829" className="btn btn-danger btn-lg">
                <i className="fas fa-phone me-2"></i>Call Us
              </a>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="text-center">
              <a
                href="https://api.whatsapp.com/send?phone=7042788829"
                target="_blank" rel="noreferrer"
                className="btn btn-success btn-lg"
              >
                <i className="fab fa-whatsapp me-2"></i>WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
