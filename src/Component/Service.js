import React from 'react';

const Service = () => {
  

  // Define the WhatsApp link with a default message
  const whatsappLink = 'https://wa.me/7042788829?text=I%20would%20like%20to%20book%20an%20appointment';

  // Function to render each card
  const renderCard = (imgSrc, title, description) => {
    return (
      <div class="col-lg-4 col-md-6">
        <div class="mb-4">
          <img src={imgSrc} class="card-img-top" alt={`Card Image - ${title}`} />
          <div class="card-body">
            <h5 class="card-title text-primary">{title}</h5>
            <p class="card-text">{description}</p>
            <a
              href={whatsappLink}
              target="_blank"
              class="btn btn-success btn-lg"
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
      {/* ... (previous code) */}
      
      <div class="container">
        <div class="row">
          {renderCard("image/card1.jpeg", "ACUPRESSURE", "Acupressure is one of the oldest Indian systems of medicine which is also approved by WHO. In which the symbolic point of the patient is pressed with the hand and massage is done at the same time completely natural and safe.")}
          {renderCard("image/card2.jpeg", "Yoga", "Indian in origin is a system of exercises for the body that involves breath control and helps relax both your mind and body, we can cure many diseases through it")}
          {renderCard("image/card3.jpeg", "Acupuncture", "Acupuncture involves inserting very thin needles into the body at different locations and depths. It aims to balance the life forces known as Qi that are responsible for different health issues Acupuncture can help relieve pain and seat a range of other complaints")}
        </div>
      </div>

      <div class="container">
        <div class="row">
          {renderCard("image/card4.jpeg", "Cupping", "Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin for a few m suction. People get it for many purposes, includir 8-10/11 inflammation, blood flow, relaxation and well-bein tissue massage.")}
          {renderCard("image/card5.jpeg", "Reiki", "Reiki is a Japanese form of energy healing a type of alternative medicine. Reiki practitioners use a technique called palm healing or hands-on healing through which a 'universal energy' is said to be transferred through the palms of the practitioner to the patient in order to encourage emotional or physical healing.")}
          {renderCard("image/card6.jpeg", "Diet", "Diet therapy is a broad term for the alteration or adoption of a diet to prevent or treat a disease or to simply promote optimum health. In some cases, an alternative dietary lifestyle plan may be developed to eliminate certain foods to reclaim health. An incorrect diet can cause not only weight gain and skin conditions but may promote exhaustion and fatigue. Depending on the disease, if you do not follow the diet advised to you by a specialist it may have serious consequences on your health. A good diet can prevent various diseases")}
        </div>
      </div>
    </div>
  );
};

export default Service;
