import React from 'react';
import FormModal from '../components/FormModal'; // Import the FormModal component

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
        <p>&copy; 2024 Eastside Consultants Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Projects;
