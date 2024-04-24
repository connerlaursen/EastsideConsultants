import React, { useState } from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Leadership from '../pages/Leadership';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import PropertyLinks from '../pages/PropertyLinks';
import RequestAQuote from '../pages/RequestAQuote';
import Testimonials from '../pages/Testimonials';
import CompanyLogo from '../assets/images/Logo.jpg'; 
// import FormModal from '../components/FormModal'; //Import the FormModal component
import '../App.css';

function Navbar() {
  const [page, setPage] = useState('Home');
  const [isOpen, setIsOpen] = useState(false); // State for toggling menu

  const handleClick = (click) => {
    const { target } = click;
    setPage(target.textContent);
    setIsOpen(false); // Close the menu after clicking a link
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const handleLogoClick = () => {
    setPage('Home'); // Set the page to 'Home' when the logo is clicked
    setIsOpen(false); // Close the menu after clicking the logo
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolling to top
  
  };

  return (
    <div>
      <nav>
        <div className="navWrapper">
          <div className="logo" onClick={handleLogoClick}>
            <img src={CompanyLogo} alt="Company Logo" className="logo-image" />
          </div>
          {/* Hamburger menu button */}
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>
          {/* Navigation links */}
          <ul className={`navLinks ${isOpen ? 'open' : ''}`}>
          <li id='homeLink' className={`nav-item ${page === 'Home' ? 'active' : ''}`} onClick={handleClick}>
              <a className="nav-link">Home</a>
            </li>
            <li className={`nav-item ${page === 'Services' ? 'active' : ''}`} onClick={handleClick}>
              <a className="nav-link">Services</a>
            </li>
            <li className={`nav-item ${page === 'Projects' ? 'active' : ''}`}>
              <a className="nav-link" onClick={handleClick}>Projects</a>
            </li>
            <li className={`nav-item ${page === 'Leadership' ? 'active' : ''}`}>
              <a className="nav-link" onClick={handleClick}>Leadership</a>
            </li>
            <li className={`nav-item ${page === 'Careers' ? 'active' : ''}`}>
              <a className="nav-link" onClick={handleClick}>Careers</a>
            </li>
            <li className={`nav-item ${page === 'Contact' ? 'active' : ''}`}>
              <a className="nav-link" onClick={handleClick}>Contact</a>
            </li>
            <li className={`nav-item ${page === 'Testimonials' ? 'active' : ''}`}>
              <a className="nav-link" onClick={handleClick}>Testimonials</a>
            </li>
            <li className={`nav-item ${page === 'Property Links' ? 'active' : ''}`}>
              <a className="nav-link" onClick={handleClick}>Property Links</a>
            </li>
            <li className={`nav-item ${page === 'Request a Quote' ? 'active' : ''}`}>
              <a className="nav-link" onClick={handleClick}>Request a Quote</a>
            </li>
            </ul>
        </div>
      </nav>
      {
        {
          Home: <Home />,
          Services: <Services />,
          Projects: <Projects />,
          Leadership: <Leadership />,
          Careers: <Careers />,
          Contact: <Contact />,
          Testimonials: <Testimonials />,
          'Property Links': <PropertyLinks />,
          'Request a Quote': <RequestAQuote />,
        }[page]
      }
    </div>
  );
}

export default Navbar;
