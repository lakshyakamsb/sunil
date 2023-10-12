import React from 'react';
import About from './About';
import Service from './Service';

const Home = () => {
  const divStyle = {
    marginTop: '100px',
  };

  return (
    <div><div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={divStyle}>
    <ol className="carousel-indicators">
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={`${process.env.PUBLIC_URL}/image/selider1.jpg`} alt="Slide 1" />
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
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </a>
  </div>
  
      <About></About>
      <Service></Service>
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
