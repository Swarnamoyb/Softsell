import './Hero.css';

const Hero = () => {
  return (
    <section className="hero min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <h1 className="display-4 fw-bold mb-4">Transform Your Business with Smart Solutions</h1>
            <p className="lead mb-4">Streamline operations, boost productivity, and drive growth with our innovative software solutions.</p>
            <div className="d-flex gap-3">
              <button className="btn btn-primary btn-lg">Get Started</button>
              <button className="btn btn-outline-primary btn-lg">Learn More</button>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="400">
            <img 
              src="/Softsell/assets/hero.jpg" 
              alt="Hero" 
              className="img-fluid rounded-3 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;