import React from 'react';
import Footer from '../components/Footer';

function Careers() {
  return (
    <div className="careersWrapper">
    

   
       
          <h1 className="careersHeader">Open Positions</h1>
          <h5 className="careersTitle"> <br></br> </h5>
          <div className="job">
            <h3>Land Surveyor</h3>
            <p>We are seeking a skilled land surveyor...</p>
            <a href="#">Apply Now</a>
        
          {/* Add more job listings here */}
        </div>

        

       
      

        <footer>
      
        <Footer />
      </footer>
    </div>
  );
}

export default Careers;
