import React, { useState } from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Leadership from '../pages/Leadership';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import Testimonials from '../pages/Testimonials';
import CompanyLogo from '../assets/images/Logo.jpg'; // Import your company logo image here
import '../App.css';

function Navbar() {
  const [page, setPage] = useState('Home');

  const handleClick = (click) => {
    const { target } = click;
    setPage(target.textContent);
  };
  const handleLogoClick = () => {
    setPage('Home'); // Set the page to 'Home' when the logo is clicked
  };

  return (
    <div>
      <nav>
      <div className="navWrapper">
          <div className="logo" onClick={handleLogoClick}>
            <img src={CompanyLogo} alt="Company Logo" className="logo-image" />
          </div>
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
            )}
            {page === 'Projects' ? (
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
            )}
            {page === 'Leadership' ? (
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
        }[page]
      }
    </div>
  );
}

export default Navbar;
