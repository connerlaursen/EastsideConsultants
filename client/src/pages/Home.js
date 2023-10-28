import React from 'react'
import selfPic from "../assets/images/Construction1.png"

function Home() {
  return (
    <div className="aboutWrapper">
    <div className="selfImageContainer"><img className="selfImage" src={selfPic}/></div>
    <div className="aboutSection">
      <h2 className="aboutSection">Eastside Consultants, Inc., a consulting firm of land surveyors and civil engineers has been providing surveying services and general civil engineering services since its inception in 1977.</h2>
    </div>
    
  </div>
  )
}

export default Home