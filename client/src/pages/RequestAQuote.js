import React from 'react'
import emailjs from 'emailjs-com'
import Footer from '../components/Footer';

// Load EmailJS SDK
(function () {
    emailjs.init("ECMVldby_xx2D2VVz");
  })();
  
  function sendEmail(event, closeModal) {
    event.preventDefault();
  
    // Get the form values using event.target.elements
    var name = event.target.elements.name.value;
    var email = event.target.elements.email.value;
    var address = event.target.elements.address.value;
    var phone = event.target.elements.phone.value;
    var parcel = event.target.elements.parcel.value;
    var county = event.target.elements.county.value;
    var sRequest = event.target.elements.sRequest.value;
    var eRequest = event.target.elements.eRequest.value;
  
    // Prepare the email parameters
    var params = {
      from_name: name,
      from_email: email,
      address: address,
      phone: phone,
      parcel: parcel,
      county: county,
      sRequest: sRequest,
      eRequest: eRequest,
    };
  
    // Send the email
    emailjs
    .sendForm("service_c8p8hvc", "template_qte1kzb", event.target, "ECMVldby_xx2D2VVz")
    .then(
      function (response) {
        // Email sent successfully
        alert("Email sent! You can expect a response within two business days.");
        // Reset the form
        event.target.reset();
        // Close the modal after successful submission
        closeModal();
      },
      function (error) {
        // An error occurred while sending the email
        console.log("Error sending email:", error);
      }
      
    )

    .finally(() => {
      closeModal(); // Closes modal regardless of success or error
    });
}
  

function Form({ closeModal }) {
  return (
        <div >
          <div className ="formSection">
          <ul className="servicesList">
</ul>

<div className="formcarry-container">
  <h5 className="quoteParagraph">Hello,
  </h5>
  <h5 className="quoteParagraph">
First, we would like to thank you for reaching out to Eastside Consultants and the opportunity in providing an
estimate for your project. To receive a quote, please complete this online form. Once received, I will complete
research on the property and forwarded to the Principal Surveyor or Civil Engineer for review. They will then
call you to discuss the scope of work, time frame and costs associated. </h5>
<h5 className="quoteParagraph">
We look forward to hearing from you! </h5>
<h5 className="quoteParagraph">
Kristy Laursen </h5>
<h5 className="quoteParagraph">
Office Manager</h5>
 
  <form onSubmit={(event) => sendEmail(event, closeModal)}>
  <label>Type of Civil Work:</label>
            <select className="formBoxSmall" name="typeOfCivilWork" required>
              <option value="">Select...</option>
              <option value="Drainage/Grading/Storm">Drainage/Grading/Storm</option>
              <option value="UtilityDesign">Utility Design</option>
              <option value="RoadDesign">Road Design</option>
              <option value="SubdivisionDesign">Subdivision Design</option>
              <option value="CommercialSiteDevelopment">Commercial Site Development</option>
              <option value="OtherCivilWork">Other</option>
            </select>

            <label>Type of Survey:</label>
            <select className="formBoxSmall" name="typeOfSurvey" required>
              <option value="">Select...</option>
              <option value="BoundarySurvey">Boundary Survey</option>
              <option value="BoundaryTopographicSurvey">Boundary & Topographic Survey</option>
              <option value="BoundaryLineAdjustment">Boundary Line Adjustment</option>
              <option value="OtherSurvey">Other</option>
            </select>

            <label>Property:</label>
            <select className="formBoxSmall" name="propertyType">
              <option value="">Select...</option>
              <option value="SingleFamilyResidence">Single Family Residence</option>
              <option value="Multifamily">Multifamily</option>
              <option value="ShortPlat">Short Plat</option>
              <option value="Plat">Plat</option>
              <option value="Commercial">Commercial</option>
              <option value="OtherProperty">Other</option>
            </select>
          <input className="formBoxSmall" type="text" name="firstname" placeholder='First Name' required />

          <input className="formBoxSmall" type="text" name="lastname" placeholder='Last Name' required />

          <input className="formBoxSmall" type="tel" name="phone" placeholder='Phone Number' required />

          <input className="formBoxSmall" type="email" name="email" placeholder='Email Address' required />

          <input className="formBoxSmall" type="text" name="address" placeholder='Site Address' required />

          <input className="formBoxSmall" type="text" name="parcel" placeholder='Tax Parcel #' />

          <input className="formBoxSmall" type="text" name="county" placeholder='County'/>

          <input className="formBoxSmall" type="text" name="billingaddress" placeholder='Billing Address' required />

          <textarea className="formBoxLarge" name="request" placeholder='Request'></textarea>


          <button className="formButton" type="submit"> Send</button>
          
        </form>
      </div>

          </div>
          <footer>
        
      <Footer />
      </footer>
      </div>
      

      
  )
}

export default Form


