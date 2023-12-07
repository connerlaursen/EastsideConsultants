import React from 'react';
import img1 from '../assets/images/img1.jpg'; // Path to your image file
import img2 from '../assets/images/img2.jpg'; // Path to your image file
import img3 from '../assets/images/img3.jpg'; // Path to your image file
import img4 from '../assets/images/img4.jpg'; // Path to your image file

function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeHeader">
        <h1>Eastside Consultants Inc.</h1>
      </div>
      
      <div className="homeMain">
        <div className="imageGallery">
          <img className='img1' src={img1} alt="Image 1" />
          <img className='img2'src={img2} alt="Image 2" />
          <img className='img3'src={img3} alt="Image 3" />
          <img className='img4'src={img4} alt="Image 4" />
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
