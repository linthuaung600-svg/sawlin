
import React, { useState } from 'react';
import Header from './Header.jsx'; 
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Success Message ကို ပြသပြီး ၃ စက္ကန့်အကြာတွင် ဖျောက်ခြင်း
    setSubmitMessage(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitMessage(''), 3000);
  };

  return (
    <div>
      <Header />
      
      <div className="container my-5">
        <h1 className="text-center display-4 fw-bold mb-5 text-dark">We're Here to Help!</h1>

        <div className="row g-5">
            
            {/* 1. Contact Info & About Us Column */}
            <div className="col-lg-5">
                
                {/* 1A. About Us (Summary) */}
                <section className="mb-4 p-4 bg-light rounded-3 shadow-sm border-start border-5 border-warning">
                    <h2 className="fw-bold mb-3 text-dark">Our Vision</h2>
                    <p className="lead small text-muted">
                        More than just coffee. We aim to be your favorite neighborhood spot, serving premium coffee and fresh pastries with a commitment to community and quality.
                    </p>
                </section>

                {/* 1B. Phone & Location Details */}
                <section className="p-4 rounded-3 shadow-sm bg-white">
                    <h2 className="fw-bold mb-4 text-primary">Contact Details</h2>
                    
                    <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-telephone-fill fs-4 me-3 text-warning"></i>
                        <div>
                            <p className="mb-0 fw-bold">Phone</p>
                            <p className="mb-0 text-muted">+95 9 123 456 789 (Call or Viber)</p>
                        </div>
                    </div>
                    
                    <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-envelope-fill fs-4 me-3 text-warning"></i>
                        <div>
                            <p className="mb-0 fw-bold">Email</p>
                            <p className="mb-0 text-muted">info@mycoffeeshop.com</p>
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <i className="bi bi-geo-alt-fill fs-4 me-3 text-warning"></i>
                        <div>
                            <p className="mb-0 fw-bold">Our Location</p>
                            <p className="mb-0 text-muted">No. 123, Downtown Avenue, Corner of 5th Street, Yangon.</p>
                        </div>
                    </div>
                </section>
                
            </div>
            
            {/* 2. Contact Form Column */}
            <div className="col-lg-7">
                <h2 className="text-center fw-bold mb-4 text-dark">Send Us a Message</h2>

                {submitMessage && (
                    <div className="alert alert-success text-center" role="alert">
                        {submitMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="p-4 border rounded shadow-lg bg-white">
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Your Message</label>
                        <textarea className="form-control" id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-warning btn-lg">
                            <i className="bi bi-send-fill me-2"></i> Send Message
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
        
        {/* 3. Google Map Section (Full Width) */}
        <section className="my-5 pt-4">
            <h2 className="text-center fw-bold mb-4 text-dark">Find Us Here</h2>
            
            {/* Map <iframe> tag */}
            <div className="rounded-3 overflow-hidden shadow-lg border border-2 border-primary">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15277.923830491185!2d96.11802956277255!3d16.804533033878776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec25c276f7f7%3A0x6b825e36f45517e4!2sYangon%2C%20Myanmar%20(Burma)!5e0!3m2!1sen!2smm!4v1633458620868!5m2!1sen!2smm"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Coffee Shop Location"
                ></iframe>
            </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;