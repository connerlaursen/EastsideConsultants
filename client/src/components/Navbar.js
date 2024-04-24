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
            <li className={`nav-item ${page === 'Services' ? 'active' : ''}`} onClick={handleClick}>
              <a className="nav-link">Services</a>
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
          {/* </ul>
          <ul className="navLinks">
            {page === 'Services' ? (
              <li className="nav-item active">
                <a className="nav-link" onClick={handleClick}>
                  Services
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" onClick={handleClick}>
                  Services
                </a>
              </li>
            )} */}
            {/* {page === 'Projects' ? (
              <li className="nav-item active">
                <a className="nav-link" onClick={handleClick}>
                  Projects
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" onClick={handleClick}>
                  Projects
                </a>
              </li>
            )} */}
            {/* {page === 'Leadership' ? (
              <li className="nav-item active">
                <a className="nav-link" onClick={handleClick}>
                  Leadership
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" onClick={handleClick}>
                  Leadership
                </a>
              </li>
            )}
            {page === 'Careers' ? (
              <li className="nav-item active">
                <a className="nav-link" onClick={handleClick}>
                  Careers
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" onClick={handleClick}>
                  Careers
                </a>
              </li>
            )}
            {page === 'Contact' ? (
              <li className="nav-item active">
                <a className="nav-link" onClick={handleClick}>
                  Contact
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" onClick={handleClick}>
                  Contact
                </a>
              </li>
            )}
            {page === 'Testimonials' ? (
              <li className="nav-item active">
                <a className="nav-link" onClick={handleClick}>
                  Testimonials
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" onClick={handleClick}>
                  Testimonials
                </a>
              </li>
            )}
            {page === 'Property Links' ? (
              <li className="nav-item active">
                <a className="nav-link" onClick={handleClick}>
                  Property Links
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" onClick={handleClick}>
                  Property Links
                </a>
              </li>
            )}
            {page === 'Request a Quote' ? (
              <li className="nav-item active">
                <a className="nav-link" onClick={handleClick}>
                  Request a Quote
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" onClick={handleClick}>
                  Request a Quote
                </a>
              </li>
            )} */}
           
          
          
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
