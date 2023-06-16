import React from 'react'

function Projects() {
  return (
        <div className="projectWrapper">
          <div className ="projectSection">
          <a href="https://watch-worthy.herokuapp.com" target = "_blank" rel="noreferrer" className="projectPicture">
            <div>
              <h3 className = 'projectLabel'>Project 1</h3>
              <span className = 'projectName'>Watch Worthy</span>
            </div>
          </a>
          <a href="https://wasmulb.github.io/RecGrabber/" target = "_blank" rel="noreferrer" className="projectPicture">
            <div>
              <h3 className = 'projectLabel'>Project 2</h3>
              <span className = 'projectName'>Rec Grabber</span>
            </div>
          </a>
          <a href="https://blind-booking.herokuapp.com/" target = "_blank" rel="noreferrer" className="projectPicture">
            <div>
              <h3 className = 'projectLabel'>Project 3</h3>
              <span className = 'projectName'>Blind Booking</span>
            </div>
          </a>
          <a href="https://github.com/connerlaursen/Social-Network-Api" target = "_blank" rel="noreferrer" className="projectPicture">
            <div>
              <h3 className = 'projectLabel'>Project 4</h3>
              <span className = 'projectName'>Social Network Api</span>
            </div>
          </a>
          <a href="https://gist.github.com/connerlaursen/07c649fdb1161abb4530f0f5d41f771b" target = "_blank" rel="noreferrer" className="projectPicture">
            <div>
              <h3 className = 'projectLabel'>Project 5</h3>
              <span className = 'projectName'>Regex Tutorial</span>
            </div>
          </a>
          <a href="https://connerlaursen-note-taker.herokuapp.com/" target = "_blank" rel="noreferrer" className="projectPicture">
            <div>
              <h3 className = 'projectLabel'>Project 6</h3>
              <span className = 'projectName'>Express Note Taker</span>
            </div>
          </a>
          </div>
      </div>

      
  )
}

export default Projects