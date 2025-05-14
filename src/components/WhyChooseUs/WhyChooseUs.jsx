import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Expert Support",
      description: "24/7 dedicated support team to help you succeed",
      icon: "headset"
    },
    {
      title: "Customizable Solutions",
      description: "Tailored software solutions to meet your specific needs",
      icon: "gear-wide-connected"
    },
    {
      title: "Proven Track Record",
      description: "Successfully serving businesses for over a decade",
      icon: "trophy"
    }
  ];

  return (
    <section id="why-choose-us" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary mb-3" data-aos="fade-up">Why Choose Us</h2>
          <p className="lead text-secondary" data-aos="fade-up">What makes us different from others</p>
        </div>
        <div className="row g-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <i className={`bi bi-${benefit.icon} display-4 text-primary mb-4`}></i>
                  <h3 className="h4 mb-3">{benefit.title}</h3>
                  <p className="text-secondary mb-0">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;