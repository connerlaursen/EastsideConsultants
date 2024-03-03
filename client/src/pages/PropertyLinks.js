import React from 'react';
import Footer from '../components/Footer';
import img4 from '../assets/images/img4.jpg'; 

function Projects() {
  return (
    <div className="propertyWrapper">
      <div className="propertySection">
     
<h2 className="propertyTitle">King County Department of Assessments: eReal Property</h2>

<ul className='firstLink'>
    <li><a href="https://kingcounty.gov/depts/assessor.aspx">King County Department of Assessments</a></li>
    <li> Navigate to find parcel data, legal descriptions, land data, building data, and sales history.</li>
</ul>

<h2 className="propertyTitle">iMap (kingcounty.gov)</h2>

<ul className='firstLink'>
    <li><a href="https://kingcounty.gov/services/gis/maps/imap.aspx">iMap - King County GIS Center</a></li>
    <li>Explore the interactive map to view aerial images, land contours, and environmentally sensitive areas.</li>
</ul>

<h2 className="propertyTitle">CFEDS.org</h2>

<ul className='firstLink'>
    <li><a href="https://cfsnsps.com/">CFEDS - Certified Federal Surveyor</a></li>
    <li>Explore the site for details on becoming a Certified Federal Surveyor and related information.</li>
</ul>
<img className='img1' src={img4} alt="pic4" />
       
      </div>
      <footer>
        
      <Footer />
      </footer>
    </div>
  );
}

export default Projects;
