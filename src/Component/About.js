import React from 'react';

const About = () => {
  const divStyle = {
    marginTop: '100px',
    fontFamily: "'AR One Sans', sans-serif",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '25px',
    
  };

  return (
    <div style={divStyle} className="container mt-5">
      <div className="row">
        <div className="col-md-6">
        <h1 style={{ ...divStyle, fontSize: '40px' }}>About Us</h1>

          <p>
            Welcome to Shuddhivigrah Alternative Medicine – Your Path to Holistic Healing!
            At Shuddhivigrah Alternative Medicine, we believe in the power of natural therapies to rejuvenate your body and mind. Serving the Delhi NCR area, we offer personalized home services for a range of holistic treatments, carefully curated to promote your overall well-being. Our certified team of experts combines ancient healing practices with modern technology, ensuring you receive the best care possible.
            <strong>Why Choose Us?</strong>
            <ol>
              <li>
                <strong>Comprehensive Natural Therapies:</strong> We specialize in a variety of natural therapies tailored to meet your individual needs. From acupuncture and herbal remedies to yoga and meditation, our therapies encompass the essence of traditional healing practices.
              </li>
              <li>
                <strong>Home Services:</strong> Experience the comfort of healing in your own space. Our dedicated team provides home services, ensuring you can relax and rejuvenate without the hassle of travel.
              </li>
              <li>
                <strong>Integration of Technology:</strong> We blend ancient wisdom with modern innovation. During sessions, we harness the power of cutting-edge machines, enhancing the effectiveness of your treatments.
              </li>
              <li>
                <strong>Certified Experts:</strong> Our team comprises certified experts who are passionate about holistic healing. They have successfully treated over 1000 satisfied patients, helping them achieve optimal health and vitality.
              </li>
              <li>
                <strong>Center-Based Treatments:</strong> If you prefer in-person sessions, our center offers a serene and welcoming environment. Our state-of-the-art facilities are designed to promote tranquility and healing.
              </li>
              <li>
                <strong>Treatment for Multiple Diseases:</strong> Whether you’re seeking relief from chronic pain, managing stress, or addressing specific health concerns, our treatments are designed to target a wide range of diseases. We offer holistic solutions that promote healing from within.
              </li>
              <li>
                <strong>Mind-Body Wellness:</strong> We understand the interconnectedness of the mind and body. Our holistic approach not only addresses physical ailments but also nurtures mental well-being, fostering a sense of balance and harmony in your life.
              </li>
            </ol>
            At Shuddhivigrah Alternative Medicine, your journey to holistic health begins. Let our expert team guide you towards a life of vitality and wellness. Embrace natural healing, embrace life.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + '/image/lkl.jpg'}
            alt="this is about img"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
