import React from 'react';
import Footer from '../components/Footer';

function Personnel() {
  return (
    <div className="projectWrapper">
      <h1 className="personnelHeader">Key Personnel</h1>
      <h5 className="personnelTitle">Robert J. Bogdon, P.L.S., CFedS, Principal </h5>
      <p className="personnelDescription">Rob has a broad background of surveying experience, with a strong emphasis on boundary surveys in 
        both Washington and Oregon. He is one of the few surveyors in private industry to have completed the Bureau 
        of Land Management's Advanced Cadastral Course and was actively involved in the Washington Centennial Corner 
        Monumentation Project. At Eastside Consultants, Rob is Chief of Parties, scheduling field crews and reviewing 
        completed field work. A large portion of his current responsibilities also includes research of legal descriptions 
        and historical data relative to a parcel. </p>
      
        <h5 className="personnelTitle">Ronald S. Frederiksen, P.E., L.S.I.T, Principal  </h5>
      <p className="personnelDescription">Ron graduated from the University of Idaho in 1997 with a degree in Civil 
      Engineering. His experience over the past 6 years is in both engineering and surveying. He has participated in both 
      residential and commercial developments in various jurisdictions, including plat layouts, roadway designs, water and sewer 
      designs, temporary erosion control plans, grading and storm drainage designs, drainage and conveyance design, detention 
      calculations, and preparation of Level 1 and Technical Information Reports under both the 1990 and 1998 King County Surface 
      Water Design Manuals guidelines and the Department of Ecology's Stormwater Manual.  </p>

      <h5 className="personnelTitle">Steven W. Kitz, P.E./P.L.S., Principal   </h5>
      <p className="personnelDescription">After graduating with a degree in Civil Engineering from the University of Washington
       in 1986, Steve began his career with Eastside Consultants. He has subsequently been responsible for integrating the
        technological advances in engineering and surveying methods with the real time demands of the firm's projects. Steve 
        also manages complex engineering and surveying projects, such as large subdivision design, from its inception to 
        construction.  </p>

        <footer>
       
        <Footer />
      </footer>
    </div>
  

    
  );
}

export default Personnel;