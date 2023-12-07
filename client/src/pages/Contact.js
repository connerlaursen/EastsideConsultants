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
      alert("Email sent! You can expect a response within two business days.");
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
    <h2 className="contactHeader">Contact Us</h2>
    <h5 className="contactTitle"> <br></br> </h5>
    <p className="contactDescription">Thank you considering 
    Eastside Consultants, Inc. for your project. If you are looking for a 
    quote, please request via the online form. Once received, the 
    necessary research will be done and then we will call you to discuss your 
    project, scope of work, and costs associated.  </p>

<div className="contactDetails">
<div className="contactInfo">
<h4> Location: </h4>
<p>1320 NW Mall Street, Suite B Issaquah, WA 98027 </p>
<h4> Phone: </h4>
<p>425.392.5351</p>
<h4> Email: </h4>
<a href="mailto:info@eastsideconsultants.com">info@eastsideconsultants.com</a>

</div>

<div>
       
        <img className="map"
          src="https://maps.googleapis.com/maps/api/staticmap?center=1320+NW+Mall+Street,+Suite+B+Issaquah,+WA+98027&zoom=15&size=600x300&maptype=roadmap
          &markers=color:red%7Clabel:C%7C1320+NW+Mall+Street,+Suite+B+Issaquah,+WA+98027
          &key=AIzaSyCpWdbJyKutfMypMvjDwS5iHLNFHgL7S-M"
          alt="Google Map"
        />
      </div>
      </div>
<div>
<h4 className="bottomContactText">Rob Bogdon 
described of our location as "we are strategically located 207 
feet north of the Gas Lamp Tavern!" 
</h4>
</div>

 </div>

   /* //   <div className="formcarry-container">
    //     <form onSubmit={sendEmail}>
    //       <input type="text" name="name" placeholder='Name' required />

    //       <input type="email" name="email" placeholder='Email Address' required />

    //       <input type="text" name="address" placeholder='Property Address' required />

    //       <input type="tel" name="phone" placeholder='Phone Number' required />

    //       <input type="text" name="county" placeholder='County' required />

    //       <input type="text" name="parcel" placeholder='Tax Parcel #' required />

    //       <textarea name="sRequest" placeholder='Engineering Request'></textarea>

    //       <textarea name="eRequest" placeholder='Surveying Request'></textarea>

    //       <button type="submit"> Send</button>
    //     </form>
    //   </div> */
  )
}

export default Contact;
