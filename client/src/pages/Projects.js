import React from 'react';
import img5 from '../assets/images/Boundary1.png'; 
import img6 from '../assets/images/Boundary2.png'; 
import img7 from '../assets/images/BoundarySurvey.png'; 
import img8 from '../assets/images/EasementDescription.png'; 
import img9 from '../assets/images/EasementExhibit.png'; 
import img10 from '../assets/images/Topographic1.png'; 
import img11 from '../assets/images/Topographic2.png'; 
import img12 from '../assets/images/gradingPlan.png'; 
import img13 from '../assets/images/shortPlat.png'; 
import img14 from '../assets/images/stormSheet1.png'; 
import img15 from '../assets/images/stormSheet2.png'; 
import img16 from '../assets/images/utility.png'; 
import img17 from '../assets/images/utilitywater1.png'; 
import img18 from '../assets/images/utilitywater2.png'; 
import Footer from '../components/Footer';

function Projects() {
  return (
    <div className="projectsWrapper">
      <div className="projectsSection">
        <h1 className="projectsHeader">Land Survey Services</h1>
        <h5 className="projectsTitle"> <br></br> </h5>
        <p className = 'projectsParagraph'>Land surveying is a large portion of the work done by Eastside Consultants. This work ranges from
residential lot surveys for fence construction, boundary line adjustments, to large mapping projects for
planning and major subdivisions. Eastside Consultants is also regularly contracted to establish
boundary lines for the U.S. Forest Service, and other large landowners in heavily timbered,
mountainous terrain.</p>
  
        <h5 className = 'projectsHeading'>Boundary Survey</h5>
        <img className='projectsImgLandscape' src={img7} alt="pic7" loading="lazy" />
        <h5 className = 'projectsHeading'>Topographic Survey & Mapping</h5>
        <img className='projectsImgLandscape' src={img10} alt="pic10" loading="lazy" />
        <img className='projectsImgLandscape' src={img11} alt="pic11" loading="lazy" /> 
        <h5 className = 'projectsHeading'>Boundary Line Adjustment</h5>
        <img className='projectsImgLandscape' src={img5} alt="pic5" loading="lazy" />
        <img className='projectsImgLandscape' src={img6} alt="pic6" loading="lazy" />
        <h5 className = 'projectsHeading'>Easement Description</h5>
        <img className='projectsImgPortrait' src={img8} alt="pic8" loading="lazy" />
        <h5 className = 'projectsHeading'>Easement Exhibit</h5>
        <img className='projectsImgPortrait' src={img9} alt="pic9" loading="lazy" />
       
        </div>

        <div className="projectsSection">
        <h1 className="projectsHeader">Civil Engineering Services</h1>
        <h5 className="projectsTitle"> <br></br> </h5>
        <h5 className = 'projectsHeading'>Grading Plan</h5>
        <img className='projectsImgLandscape' src={img12} alt="pic5" loading="lazy" />
        <h5 className = 'projectsHeading'>Storm Detention / Water Quality Design</h5>
        <img className='projectsImgLandscape' src={img14} alt="pic5" loading="lazy" />
        <img className='projectsImgLandscape' src={img15} alt="pic5" loading="lazy" />
        <h5 className = 'projectsHeading'>Utility Design</h5>
        <img className='projectsImgLandscape' src={img16} alt="pic5" loading="lazy" />
        <img className='projectsImgLandscape' src={img17} alt="pic5" loading="lazy" />
        <img className='projectsImgLandscape' src={img18} alt="pic5" loading="lazy" />
        <h5 className = 'projectsHeading'>Short Plat Design</h5>
        <img className='projectsImgLandscape' src={img13} alt="pic5" loading="lazy" />
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
