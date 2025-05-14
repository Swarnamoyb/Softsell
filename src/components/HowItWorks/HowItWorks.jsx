import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      title: "Upload License",
      description: "Submit your software license details through our secure platform",
      icon: "cloud-upload"
    },
    {
      title: "Get Valuation",
      description: "Receive an instant, market-driven valuation for your license",
      icon: "calculator"
    },
    {
      title: "Get Paid",
      description: "Complete the transaction and receive payment securely",
      icon: "cash-coin"
    }
  ];

  return (
    <section id="how-it-works" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary mb-3" data-aos="fade-up">How It Works</h2>
          <p className="lead text-secondary" data-aos="fade-up">Three simple steps to sell your license</p>
        </div>
        <div className="row g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="step-card h-100 text-center">
                <div className="step-number mb-4">{index + 1}</div>
                <i className={`bi bi-${step.icon} step-icon mb-4`}></i>
                <h3 className="h4 mb-3">{step.title}</h3>
                <p className="text-secondary mb-0">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;