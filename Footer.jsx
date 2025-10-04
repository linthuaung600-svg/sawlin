// src/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5 shadow-lg border-top border-warning border-3 opacity-95">
      <div className="container">
        <div className="row g-4">
        
          <div className="col-lg-4 col-md-12">
            <Link className="navbar-brand fw-bolder fs-2 text-warning" to="/">
              <i className="bi bi-cup-hot-fill me-2"></i> COFFEE HOUSE
            </Link>
            <p className="mt-3 text-white-50 small">
              "Crafting the perfect brew, one cup at a time. Your cozy escape in the heart of the city."
            </p>
            
            <div className="mt-4">
                <p className="mb-1 small">
                    <i className="bi bi-geo-alt-fill me-2 text-warning"></i> 123, Downtown Avenue, Yangon
                </p>
                <p className="mb-1 small">
                    <i className="bi bi-telephone-fill me-2 text-warning"></i> +95 9 123 456 789
                </p>
                <p className="small">
                    <i className="bi bi-envelope-fill me-2 text-warning"></i> info@coffeehouse.com
                </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 className="fw-bold mb-3 text-light border-bottom border-warning pb-1">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-decoration-none text-white-50 hover-link">Home</Link></li>
              <li className="mb-2"><Link to="/menu" className="text-decoration-none text-white-50 hover-link">Our Menu</Link></li>
              <li className="mb-2"><Link to="/about" className="text-decoration-none text-white-50 hover-link">About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-decoration-none text-white-50 hover-link">Contact</Link></li>
            </ul>
          </div>
          
          {/* 3. Shop & Info Column (Column ၂ ခု နေရာယူ) */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 className="fw-bold mb-3 text-light border-bottom border-warning pb-1">Shop Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/books" className="text-decoration-none text-white-50 hover-link">Our Library</Link></li>
              <li className="mb-2"><a href="#!" className="text-decoration-none text-white-50 hover-link">Careers</a></li>
              <li className="mb-2"><a href="#!" className="text-decoration-none text-white-50 hover-link">FAQs</a></li>
              <li className="mb-2"><a href="#!" className="text-decoration-none text-white-50 hover-link">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* 4. Social Media and Newsletter (Column ၄ ခု နေရာယူ) */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <h5 className="fw-bold mb-3 text-light border-bottom border-warning pb-1">Stay Connected</h5>
            
            {/* Social Icons with hover effect */}
            <div className="d-flex fs-4 social-icons">
              <a href="#!" className="text-white me-3"><i className="bi bi-facebook"></i></a>
              <a href="#!" className="text-white me-3"><i className="bi bi-instagram"></i></a>
              <a href="#!" className="text-white me-3"><i className="bi bi-twitter"></i></a>
              <a href="#!" className="text-white"><i className="bi bi-whatsapp"></i></a>
              </div>
            
            <p className="mt-4 small text-warning fw-bold">Opening Hours:</p>
            <p className="small text-white-50">Mon - Fri: 7:00 AM - 9:00 PM</p>
            <p className="small text-white-50">Sat - Sun: 8:00 AM - 10:00 PM</p>
          </div>
          
        </div>
        
        <hr className="my-4 border-secondary" />
        
        {/* Copyright Section */}
        <div className="text-center small text-white-50">
          &copy; {new Date().getFullYear()} COFFEE HOUSE. All rights reserved. | Crafted with Love.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 