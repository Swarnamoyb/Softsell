import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="fw-bold mb-4">SoftSell</h5>
            <p className="text-secondary mb-4">Transforming businesses through innovative software solutions.</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-secondary fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-secondary fs-4"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-secondary fs-4"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-secondary fs-4"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
          <div className="col-lg-2">
            <h5 className="fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#how-it-works" className="text-secondary text-decoration-none">How It Works</a></li>
              <li className="mb-2"><a href="#why-choose-us" className="text-secondary text-decoration-none">Why Choose Us</a></li>
              <li className="mb-2"><a href="#testimonials" className="text-secondary text-decoration-none">Testimonials</a></li>
              <li className="mb-2"><a href="#contact" className="text-secondary text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="fw-bold mb-4">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:info@softsell.com" className="text-secondary text-decoration-none">info@softsell.com</a>
              </li>
              <li className="mb-3">
                <i className="bi bi-telephone me-2"></i>
                <a href="tel:(555)123-4567" className="text-secondary text-decoration-none">+91 9876778654</a>
              </li>
              <li className="mb-3">
                <i className="bi bi-geo-alt me-2"></i>
                <span className="text-secondary">123 Business Ave, Tech City</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="fw-bold mb-4">Newsletter</h5>
            <p className="text-secondary mb-4">Subscribe to our newsletter for updates</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Your email" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;