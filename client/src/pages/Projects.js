import React from 'react';
import img5 from '../assets/images/Boundary1.png'; 
import img6 from '../assets/images/Boundary2.png'; 
import img7 from '../assets/images/BoundarySurvey.png'; 
import img8 from '../assets/images/EasementDescription.png'; 
import img9 from '../assets/images/EasementExhibit.png'; 
// import img10 from '../assets/images/Topopgraphic1.png'; 
// import img11 from '../assets/images/Topopgraphic2.png'; 
import Footer from '../components/Footer';

function Projects() {
  return (
    <div className="projectsWrapper">
      <div className="projectsSection">
      <h1 className="projectsHeader">**Currently under construction**</h1>
        <h1 className="projectsHeader">Land Survey Services</h1>
        <h5 className="projectsTitle"> <br></br> </h5>

        <img className='projectsImg' src={img5} alt="pic5" loading="lazy" />
        <img className='projectsImg' src={img6} alt="pic6" loading="lazy" />
        <img className='projectsImg' src={img7} alt="pic7" loading="lazy" />
        <img className='projectsImg' src={img8} alt="pic8" loading="lazy" />
        <img className='projectsImg' src={img9} alt="pic9" loading="lazy" />
        {/* <img className='img10' src={img10} alt="pic10" loading="lazy" /> */}
        {/* <img className='img11' src={img11} alt="pic11" loading="lazy" />  */}
        </div>



        <div className="projectsSection">
        <h1 className="projectsHeader">Civil Engineering Services</h1>
        <h5 className="projectsTitle"> <br></br> </h5>
        </div>
        <br></br>
        <br></br>







      <footer>
        
      <Footer />
      </footer>
    </div>
  );
}

export default Projects;
