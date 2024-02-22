import React from 'react';
import Footer from '../components/Footer';
import img4 from '../assets/images/img4.jpg'; 

function Projects() {
  return (
    <div className="projectWrapper">
      <div className="projectSection">
      <h1>Property Information Resources</h1>

<h2>King County Department of Assessments: eReal Property</h2>
<p>To identify information about your property:</p>
<ul>
    <li><a href="https://kingcounty.gov/depts/assessor.aspx">King County Department of Assessments</a></li>
    <li><a href="#">eReal Property Link</a> - Navigate to find parcel data, legal descriptions, land data, building data, and sales history.</li>
</ul>

<h2>iMap (kingcounty.gov)</h2>
<p>Interactive map display of properties:</p>
<ul>
    <li><a href="https://kingcounty.gov/services/gis/maps/imap.aspx">iMap - King County GIS Center</a></li>
    <li>Explore the interactive map to view aerial images, land contours, and environmentally sensitive areas.</li>
</ul>

<h2>CFEDS.org</h2>
<p>Information about being a Certified Federal Surveyor:</p>
<ul>
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
