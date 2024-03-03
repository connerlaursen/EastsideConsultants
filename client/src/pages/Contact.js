import React from 'react';

import Footer from '../components/Footer';


function Contact() {
  return (
    
    <div className="contactWrapper">
    <h1 className="contactHeader">Contact Us</h1>
    <h5 className="contactTitle"> <br></br> </h5>


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
<a href="https://maps.google.com?q=1320+NW+Mall+Street,+Suite+B+Issaquah,+WA+98027" target="_blank" rel="noopener noreferrer">
            
        <img className="map"
          src="https://maps.googleapis.com/maps/api/staticmap?center=1320+NW+Mall+Street,+Suite+B+Issaquah,+WA+98027&zoom=15&size=600x300&maptype=roadmap
          &markers=color:red%7Clabel:C%7C1320+NW+Mall+Street,+Suite+B+Issaquah,+WA+98027
          &key=AIzaSyCpWdbJyKutfMypMvjDwS5iHLNFHgL7S-M"
          alt="Google Map"
        />
        </a>
      </div>
      </div>

<footer>
        
<Footer />
      </footer>

 </div>

   
  )
}

export default Contact;
