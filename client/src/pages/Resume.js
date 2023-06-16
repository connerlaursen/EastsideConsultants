import React from 'react'
import ResumePDF from "../assets/images/resume.pdf"
function Resume() {
  return (
    <div className="resumeWrapper">
    <object className="resumeSection" data={ResumePDF} type="application/pdf" width="80%" height="80%">
      <p>Click <a className ='pdfLink' href={ResumePDF}>here</a> to view or download my Resume</p>
  </object>
  </div>
  )
}

export default Resume