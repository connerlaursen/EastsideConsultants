import React from 'react';
import emailjs from 'emailjs-com';


function Contact() {
  return (
    
    <div className="contactWrapper">
    <h1 className="contactHeader">Contact Us</h1>
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
<footer>
        <p>&copy; 2024 Eastside Consultants Inc. All rights reserved.</p>
      </footer>

 </div>

   
  )
}

export default Contact;
