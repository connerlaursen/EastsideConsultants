import React from 'react';
import FormModal from '../components/FormModal'; // Import the FormModal component
import Footer from '../components/Footer';

function Projects() {
  return (
    <div className="projectWrapper">
      <div className="projectSection">
        <ul className="servicesList">
          <li>Projects page</li>
        </ul>
        
      
        <FormModal />
      </div>
      <footer>
        
      <Footer />
      </footer>
    </div>
  );
}

export default Projects;
