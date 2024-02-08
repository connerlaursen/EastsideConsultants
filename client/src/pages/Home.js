import React from 'react';
import img1 from '../assets/images/img1.jpg'; 
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeHeader">
        <h1>Eastside Consultants, Inc.</h1>
      </div>
      <div className="company-description">
          <p className="company-description-text">Eastside Consultants, Inc., a firm of land surveyors and civil engineers, has been providing surveying service and general civil engineering services since its inception in 1977.</p>
        </div>
      
      <div className="homeMain">
        <div className="image-gallery">
          <img className='img1' src={img1} alt="pic1" loading="lazy" />
        </div>
      
       
       
      </div>
      
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
