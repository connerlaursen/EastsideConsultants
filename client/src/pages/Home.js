import React from 'react';
import img1 from '../assets/images/img1.jpg'; 
// import img2 from '../assets/images/img2.jpg'; 
// import img3 from '../assets/images/img3.jpg'; 
// import img4 from '../assets/images/img4.jpg'; 

function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeHeader">
        <h1>Eastside Consultants Inc.</h1>
      </div>
      
      <div className="homeMain">
        <div className="imageGallery">
          <img className='img1' src={img1} alt="pic1" loading="lazy" />
          {/* <img className='img2' src={img2} alt="pic2" loading="lazy" />
              <img className='img3' src={img3} alt="pic3" loading="lazy" />
              <img className='img4' src={img4} alt="pic4" loading="lazy" /> */}
        </div>
        {/* Other content for the home page */}
      </div>
      
      <footer>
        <p>&copy; 2024 Eastside Consultants Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
