import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand fw-bold text-primary fs-4" href="#" data-aos="fade-right">
          <img src="/Softsell/assets/Softsell.png" alt="SoftSell Logo" height="40" className="me-2" />
          SoftSell
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
          <ul className="navbar-nav ms-auto" data-aos="fade-left">
            <li className="nav-item">
              <a className="nav-link fw-semibold px-4 fs-5" href="#how-it-works">How It Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold px-4 fs-5" href="#why-choose-us">Why Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold px-4 fs-5" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold px-4 fs-5" href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
