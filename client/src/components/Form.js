import React from 'react'
import emailjs from 'emailjs-com'

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
        <div className="formWrapper">
          <div className ="formSection">
          <ul className="servicesList">
</ul>

<div className="formcarry-container">
  <h3 className='modalTitle'>Please complete the form</h3>
  <form onSubmit={(event) => sendEmail(event, closeModal)}>
          <input type="text" name="name" placeholder='Name' required />

          <input type="email" name="email" placeholder='Email Address' required />

          <input type="text" name="address" placeholder='Property Address' required />

          <input type="tel" name="phone" placeholder='Phone Number' required />

          <input type="text" name="county" placeholder='County' required />

          <input type="text" name="parcel" placeholder='Tax Parcel #' required />

          <textarea name="sRequest" placeholder='Engineering Request'></textarea>

          <textarea name="eRequest" placeholder='Surveying Request'></textarea>

          <button type="submit"> Send</button>
          
        </form>
      </div>

          </div>
        
      </div>

      
  )
}

export default Form


