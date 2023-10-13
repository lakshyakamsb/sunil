import React from 'react';
import About from './About';


const Home = () => {
  const divStyle = {
    marginTop: '100px',
    
  };

  const whatsappLink = 'https://wa.me/7042788829?text=I%20would%20like%20to%20book%20an%20appointment';

  // Function to render each card
  const renderCard = (imgSrc, title, description, id) => {
    return (
      <div className="col-lg-4 col-md-6" id={id}>
        <div className="mb-4">
          <img src={`${process.env.PUBLIC_URL}/${imgSrc}`} className="card-img-top" alt={`Card Image - ${title}`} />
          <div className="card-body">
            <h5 className="card-title text-primary">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={whatsappLink}
              target="_blank"
              className="btn btn-success btn-lg"
            >
              <i className="fab fa-whatsapp me-2"></i>Book Appointment
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
  <div className="row">
    <div className="col-lg-8 mx-auto">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={divStyle}>
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={`${process.env.PUBLIC_URL}/image/selider1.jpg`} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/image/selider2.jpg`} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/image/selider3.jpg`} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" ariahidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </div>
</div>

      <About />

      {/* ... (previous code) */}
      <h1 style={{ textAlign: 'center' }}>Our Services</h1>

      <div className="container" style={{ fontFamily: "'AR One Sans', 'Open Sans', sans-serif", fontSize: '25px' }} >
        <div className="row">
          {renderCard("image/card1.jpeg", "ACUPRESSURE", "Acupressure is one of the oldest Indian systems of medicine which is also approved by WHO. In which the symbolic point of the patient is pressed with the hand and massage is done at the same time completely natural and safe.", "acupressure")}
          {renderCard("image/card2.jpeg", "Yoga", "Indian in origin is a system of exercises for the body that involves breath control and helps relax both your mind and body, we can cure many diseases through it", "yoga")}
          {renderCard("image/card3.jpeg", "Acupuncture", "Acupuncture involves inserting very thin needles into the body at different locations and depths. It aims to balance the life forces known as Qi that are responsible for different health issues. Acupuncture can help relieve pain and treat a range of other complaints", "acupuncture")}
        </div>
      </div>

      <div className="container" style={{ fontFamily: "'AR One Sans', 'Open Sans', sans-serif", fontSize: '25px' }}>
        <div className="row">
          {renderCard("image/card4.jpeg", "Cupping", "Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin for a few minutes, creating suction. People get it for many purposes, including inflammation, improving blood flow, relaxation, and well-being, and deep tissue massage", "cupping")}
          {renderCard("image/card5.jpeg", "Reiki", "Reiki is a Japanese form of energy healing, a type of alternative medicine. Reiki practitioners use a technique called palm healing or hands-on healing through which a 'universal energy' is said to be transferred through the palms of the practitioner to the patient in order to encourage emotional or physical healing", "reiki")}
          {renderCard("image/card6.jpeg", "Diet", "Diet therapy is a broad term for the alteration or adoption of a diet to prevent or treat a disease or to simply promote optimum health. In some cases, an alternative dietary lifestyle plan may be developed to eliminate certain foods to reclaim health. An incorrect diet can cause not only weight gain and skin conditions but may promote exhaustion and fatigue. Depending on the disease, if you do not follow the diet advised to you by a specialist, it may have serious consequences on your health. A good diet can prevent various diseases", "diet")}
        </div>
      </div>

      {/* ... (gallery code, as-is) */}
     
      <div id="gallery" className="container bg-info">
  <br />
  <br />
  <h1 className="text-center text-warning bg-secondary-subtle">
    Your Image Gallery
  </h1>
  <br />
  <br />
  <div className="row">
    <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-2">
      <img src={process.env.PUBLIC_URL + '/image/card4.jpeg'} alt="A beautiful landscape" className="img-fluid" />
    </div>

    <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-2">
      <img src={process.env.PUBLIC_URL + '/image/card4.jpeg'} alt="Beautiful landscape with mountains" className="img-fluid" />
    </div>

    <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-2">
      <img src={process.env.PUBLIC_URL + '/image/gallery2.jpeg'} alt="Stunning cityscape at night" className="img-fluid" />
    </div>
  </div>
  <div className="row">
    <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-2">
      <img src={process.env.PUBLIC_URL + '/image/gallery3.jpeg'} alt="Historic architecture in a bustling city" className="img-fluid" />
    </div>

    <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-2">
      <img src={process.env.PUBLIC_URL + '/image/gallery4.jpeg'} alt="Historic city streets on a sunny day" className="img-fluid" />
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-2 mb-3">
      <img src={process.env.PUBLIC_URL + '/image/card6.jpeg'} alt="Elegant business card design" className="img-fluid" />
    </div>
  </div>
</div>
      
    </div>
  );
};

export default Home;
