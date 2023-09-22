import React from 'react';
import emailjs from 'emailjs-com';

// Load EmailJS SDK
(function () {
  emailjs.init("ECMVldby_xx2D2VVz");
})();

function sendEmail(event) {
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
  emailjs.sendForm("service_c8p8hvc", "template_qte1kzb", event.target, "ECMVldby_xx2D2VVz")
    .then(function (response) {
      // Email sent successfully
      alert("Email sent!");
      // Reset the form
      event.target.reset();
    }, function (error) {
      // An error occurred while sending the email
      console.log("Error sending email:", error);
    });
}

function Contact() {
  return (
    <div className="contactWrapper">
      <div className="formcarry-container">
        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Name' required />

          <input type="email" name="email" placeholder='Email Address' required />

          <input type="text" name="address" placeholder='Property Address' required />

          <input type="tel" name="phone" placeholder='Phone Number' required />

          <input type="text" name="County" placeholder='County' required />

          <input type="text" name="parcel" placeholder='Tax Parcel #' required />

          <textarea name="sRequest" placeholder='Engineering Request'></textarea>

          <textarea name="eRequest" placeholder='Surveying Request'></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
