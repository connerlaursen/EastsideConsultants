import React from 'react';

function Services() {
  return (
    <div className="servicesWrapper">
      <div className="servicesSection">
        <h2 className="servicesHeader">Survey Services</h2>
        <h5 className="servicesTitle"> <br></br> </h5>
        <ul className="servicesList">
          <li>Boundary Surveys</li>
          <li>Construction Staking</li>
          <li>As-Built Surveys</li>
          <li>Topographic Surveys & Mapping</li>
          <li>Wetland Location Surveys</li>
          <li>ALTA Surveys</li>
          <li>Easement Description & Exhibit</li>
          <li>Boundary Line Adjustments</li>
          <li>Route Surveys/ Right of Way Acquisition</li>
          <li>Encroachment Surveys</li>
          <li>Legal Descriptions</li>
          <li>Aerial Survey Ground Control</li>
          <li>Cadastral Retracement Surveys</li>
        </ul>
      </div>
      <div className="servicesSection">
        <h2 className="servicesHeader">Civil Services</h2>
        <h5 className="servicesTitle"> <br></br> </h5>
        <ul className="servicesList">
          <li>Drainage Analysis & Reports</li>
          <li>Grading Plans</li>
          <li>Road & Street Design</li>
          <li>Storm Detention & Water Quality Design</li>
          <li>Utilities Design</li>
          <li>SEPA Checklists</li>
          <li>Residential Subdivision Design & Short Plat Design</li>
          <li>Commercial Site Development</li>
        </ul>
      </div>
      <footer>
        <p>&copy; 2024 Eastside Consultants Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Services;
