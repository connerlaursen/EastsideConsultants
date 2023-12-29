import React from 'react';
import img1 from '../assets/images/img1.jpg'; 
import FormModal from '../components/FormModal';
import Footer from '../components/Footer';




function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeHeader">
        <h1>Eastside Consultants Inc.</h1>
      </div>
      
      <div className="homeMain">
        <div className="imageGallery">
          <img className='img1' src={img1} alt="pic1" loading="lazy" />
        
        </div>
       
        <FormModal />
      </div>
      
      <footer>
        
      <Footer />
      </footer>
    </div>
  );
}

export default Home;
