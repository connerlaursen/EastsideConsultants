import React from 'react'
import homePic from "../assets/images/Alpental-b.jpg"

function Home() {
  return (
    <div className="aboutWrapper">
    <div className="homeImageContainer"><img className="homeImage" src={homePic}/></div>
    <div className="aboutSection">
      <h2 className="aboutSection">Eastside Consultants, Inc., a consulting firm of land surveyors and civil engineers has been providing surveying services and general civil engineering services since its inception in 1977.</h2>
    </div>
    
  </div>
  )
}

export default Home