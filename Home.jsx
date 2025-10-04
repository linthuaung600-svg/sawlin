
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx'; 
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const HERO_BACKGROUND_IMG = 'https://picsum.photos/1600/900?random=barista';
const featuredItems = [
  { name: 'Signature Latte', price: '4,500 Ks', description: 'Our perfectly balanced espresso with creamy, fresh milk.', icon: 'bi-cup-hot-fill' },
  { name: 'Cold Brew Delight', price: '5,000 Ks', description: 'Smooth, 12-hour cold-brewed coffee with a hint of vanilla.', icon: 'bi-cup-fill' },
  { name: 'Avocado Toast', price: '5,000 Ks', description: 'Fresh avocado, seasoning, and olive oil on sourdough bread.', icon: 'bi-egg-fried' },
];

const Home = () => {
  return (
    <div>
      <Header />
    
      <section 
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          minHeight: '100vh',
          background: `url(${HERO_BACKGROUND_IMG}) no-repeat center center/cover`,
          position: 'relative',
        }}
      >

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}></div>
        
        <div className="container py-5 z-1" style={{ position: 'relative' }}>
          <p className="lead text-warning fw-bold mb-3" style={{ letterSpacing: '3px' }}>
            WELCOME TO LUXE BREW
          </p>
          <h1 className="display-1 fw-bolder mb-4 text-white text-shadow-lg">
            Where Luxury Meets Coffee
          </h1>
          <p className="col-lg-8 mx-auto lead mb-5 fs-5">
            Experience premium blends, artisanal pastries, and a truly comfortable escape in the heart of the city.
          </p>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <Link to="/menu" className="btn btn-warning btn-lg px-5 py-3 fw-bold shadow-lg text-black">
              View Full Menu
            </Link>
            <Link to="/about" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold border-2 shadow-lg">
              Our Story
            </Link>
          </div>
        </div>
      </section>
      <section className="container my-5 py-5">
        <h2 className="text-center display-5 fw-bold mb-3 text-dark">Our Featured Delights</h2>
        <p className="text-center text-muted mb-5 fs-5">
          Hand-picked favorites you must try on your next visit.
        </p>
        
        <div className="row g-4 justify-content-center">
          {featuredItems.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-lg text-center p-4 border-warning border-3">
                <i className={`bi ${item.icon} fs-1 text-warning mb-3`}></i>
                <h5 className="card-title fw-bold text-dark">{item.name}</h5>
                <p className="card-text text-muted small flex-grow-1">{item.description}</p>
                <div className="mt-3">
                  <span className="fs-4 fw-bold text-danger">{item.price}</span>
                </div>
                <Link to="/menu" className="btn btn-sm btn-outline-dark mt-3">Order Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-light py-5">
        <div className="container text-center">
            <h2 className="fw-bold mb-3 text-primary">Planning a Visit?</h2>
            <p className="lead text-secondary mb-4 col-lg-8 mx-auto">
                Reserve your table or check our location for the perfect meeting spot. We're ready to welcome you!
            </p>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                <Link to="/book" className="btn btn-warning btn-lg px-5 py-3 fw-bold text-black shadow">
                    Book A Table Today
                </Link>
                <Link to="/contact" className="btn btn-outline-dark btn-lg px-5 py-3 fw-bold border-2 shadow">
                    View Location Map
                </Link>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home; 