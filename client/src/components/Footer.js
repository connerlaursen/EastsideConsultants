import React from 'react';
import bbb from '../assets/images/bbb.png'; 
import '../App.css';


function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <h3>Eastside Consultants, Inc.</h3>
          <p>1320 NW Mall Street, Suite B Issaquah, WA 98027</p>
          <a href="mailto:info@eastsideconsultants.com">info@eastsideconsultants.com</a>
          <p>425.392.5351</p>
        </div>
        <div className="bbb-section">
      <img src={bbb} alt="BBB" />
      <p>BBB accredited since 2007</p>
    </div>
      </div>
      <p className="copyright">&copy; 2024 Eastside Consultants, Inc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
