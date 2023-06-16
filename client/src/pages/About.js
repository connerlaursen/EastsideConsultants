import React from 'react'
import selfPic from "../assets/images/image-self2.png"

function About() {
  return (
    <div className="aboutWrapper">
    <div className="selfImageContainer"><img className="selfImage" src={selfPic}/></div>
    <p className="aboutSection">
      <h2>Hi, my name is Conner Laursen.</h2>
      <h4>I enjoy creating websites and applications. I am eagerly aspiring to make this passion a career.</h4>
      <h4>Currently thriving in my leadership role as the Moorage and Office Supervisor at the Port of Edmonds.</h4>
      <h4>I graduated from the University of Washington with both a Bachelor of Science in Oceanography and a Coding Bootcamp certificate with a GPA of 3.7.</h4>
      <h4>Out of the office you will find me hiking the foothills of Mount Rainier, competing in esports tournaments and playing with my cat.</h4>
    </p>
    
  </div>
  )
}

export default About