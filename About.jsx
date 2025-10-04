
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header.jsx'; 
import Footer from './Footer.jsx';

import PersonOneImg from './AungAung.jpg';
import PersonTwoImg from './HlaHla.jpg'; 
import PersonThreeImg from './MyaMya.jpg'; 
import InteriorImage from './coffeshopinterior.jpg'; 
const teamMembers = [
  {
    name: 'AungAung (CEO/Head Roaster)',
    role: 'Visionary & Lead Coffee Developer',
    description: 'AungAung oversees coffee sourcing, quality control, and is the driving force behind our unique roasting profiles.',
    imageUrl: PersonOneImg, 
  },
  {
    name: 'HlaHla (Lead Barista)',
    role: 'Customer Experience Manager',
    description: 'HlaHla manages the front-of-house team, ensuring every customer enjoys a perfect cup and a warm, inviting atmosphere.',
    imageUrl: PersonTwoImg, 
  },
  {
    name: 'MyaMya (Pastry Chef)',
    role: 'Head of Culinary Arts',
    description: 'MyaMya is responsible for all our delicious in-house pastries, making sure they perfectly complement our signature coffee drinks.',
    imageUrl: PersonThreeImg, 
  },
];

const AboutPage = () => {
  return (
    <div>
      <Header />
      
      <div className="container my-5" style={{ paddingTop: '50px' }}>
        <h1 className="text-center mb-4 display-4 fw-bold text-dark text-uppercase">
          Our Coffee Journey
        </h1>
        <p className="text-center lead mb-5 text-muted">
          Brewing exceptional coffee and building a community, one cup at a time.
        </p>
        <section className="row align-items-center mb-5 p-4 rounded bg-light shadow-lg">
          <div className="col-md-6 order-md-2">
            <img 
              src={InteriorImage} 
              alt="Cozy Coffee Shop Interior" 
              className="img-fluid rounded shadow-lg" 
              style={{ maxHeight: '350px', objectFit: 'cover' }}
            />
          </div>
           <hr className="my-5" />
          <div className="col-md-6 order-md-1">
            <h2 className="fw-bold text-primary mb-3">The Beginning</h2>
            <p>
              The Coffee House started in 2020 with a simple mission: to bring the finest ethically-sourced beans from around the world to our neighborhood. We believe great coffee begins with great relationships with farmers and a deep respect for the bean's journey.
            </p>
            <p>
              From our meticulous roasting process to our carefully trained baristas, every step is taken to ensure your daily ritual is nothing short of perfect.
            </p>
          </div>
        </section>
        
        <section className="mb-5 p-4">
          <h2 className="text-center fw-bold text-dark mb-5 display-5">Meet the Team</h2>
          
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div className="card h-100 shadow-lg border-0 text-center">
                  <img
                    src={member.imageUrl}
                    className="card-img-top mx-auto mt-3 rounded-circle border border-5 border-warning"
                    alt={member.name}
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                  
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-primary mb-1">{member.name}</h5>
                    <p className="card-subtitle mb-2 text-muted small fst-italic">{member.role}</p>
                    <p className="card-text small text-dark">{member.description}</p>
                    
                    <div className="mt-3">
                      <a href="#" className="text-dark me-3"><i className="bi bi-linkedin fs-5"></i></a>
                      <a href="#" className="text-dark me-3"><i className="bi bi-twitter fs-5"></i></a>
                      <a href="#" className="text-dark"><i className="bi bi-instagram fs-5"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;