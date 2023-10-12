import React from 'react'
import About from './About';
import Service from './Service';

const Home = () => {
    const divStyle = {
        marginTop: '100px',
      };
    
  return (
    <div>

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"style={divStyle}>
    <ol class="carousel-indicators">
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/image/selider1.jpg" alt="selide 1" />

      </div>
      <div class="carousel-item">
        <img src="image/selider2.jpg" class="d-block w-100" alt="Slide 2"/>
      </div>
      <div class="carousel-item">
        <img src="image/selider3.jpg" class="d-block w-100" alt="Slide 3"/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
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
          <img src="image/gallery1.jpeg" alt="Image 1" className="img-fluid" />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-2">
          <img src="image/card4.jpeg" alt="Image 2" className="img-fluid" />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-2">
          <img src="image/gallery2.jpeg" alt="Image 3" className="img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-2">
          <img src="image/gallery3.jpeg" alt="Image 4" className="img-fluid" />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-2">
          <img src="image/gallery4.jpeg" alt="Image 5" className="img-fluid" />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-2 mb-3">
          <img src="image/card6.jpeg" alt="Image 6" className="img-fluid" />
        </div>
      </div>
    </div>


    </div>
  )
}

export default Home
