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
  var message = event.target.elements.message.value;

  // Prepare the email parameters
  var params = {
    from_name: name,
    from_email: email,
    message: message,
  };

  // Send the email
  emailjs.sendForm("service_4rqipdd", "template_2h5k9p8", event.target, "ECMVldby_xx2D2VVz")
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

          <textarea name="message" cols="30" rows="7" placeholder='Message'></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
