const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
    } else {
      console.log('Form is valid, processing submission...');
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3" data-aos="fade-up">Get In Touch</h2>
            <p className="lead text-secondary" data-aos="fade-up">Ready to transform your business? Contact us today!</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8" data-aos="fade-up">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit} className="needs-validation">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Your Name"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your name
                    </div>
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Your Email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address
                    </div>
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Company Name"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your company name
                    </div>
                  </div>
                  <div className="mb-4">
                    <select 
                      className="form-select form-select-lg"
                      required
                    >
                      <option value="">Select License Type</option>
                      <option value="basic">Basic License</option>
                      <option value="professional">Professional License</option>
                      <option value="enterprise">Enterprise License</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a license type
                    </div>
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="form-control form-control-lg"
                      rows="5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                    <div className="invalid-feedback">
                      Please enter your message
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-lg px-5">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;