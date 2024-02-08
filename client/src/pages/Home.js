import React from 'react';
import img1 from '../assets/images/img1.jpg'; 
import FormModal from '../components/FormModal';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeHeader">
        <h1>Eastside Consultants, Inc.</h1>
      </div>
      
      <div className="homeMain">
        <div className="image-gallery">
          <img className='img1' src={img1} alt="pic1" loading="lazy" />
        </div>
        <FormModal />
        <div className="company-description">
          <p>*** put this more prominent on top***Eastside Consultants, Inc., a consulting firm of land surveyors and civil engineers has been providing surveying services and general civil engineering services since its inception in 1977.</p>
        </div>
       
       
      </div>
      
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
