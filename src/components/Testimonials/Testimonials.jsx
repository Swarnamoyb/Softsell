import { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emma Thompson",
      position: "CEO, TechCorp",
      content: "SoftSell has transformed how we manage our operations. Highly recommended!",
      image: "/Softsell/assets/testimonial1.jpg"
    },
    {
      name: "Jose Johnson",
      position: "CTO, InnovateX",
      content: "The best software solution we've implemented. Outstanding support team!",
      image: "/Softsell/assets/testimonial2.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary mb-3" data-aos="fade-up">What Our Clients Say</h2>
          <p className="lead text-secondary" data-aos="fade-up">Trusted by businesses worldwide</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up">
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-5 text-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="rounded-circle mb-4"
                          style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                        />
                        <p className="lead mb-4">{testimonial.content}</p>
                        <h5 className="mb-1">{testimonial.name}</h5>
                        <p className="text-secondary mb-0">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;