import React from 'react'
import img2 from '../assets/images/img2.jpg'; 
import img3 from '../assets/images/img3.jpg'; 
import img4 from '../assets/images/img4.jpg'; 
import Footer from '../components/Footer';

function Testimonials() {
  return (
    <div className="testimonialsWrapper">
    <h1 className="testimonialsHeader">Testimonials</h1>



    <div className ='testimonial'>
    <h5 className="testimonialsTitle"> Kristin T. </h5>
    <p className="testimonialsDescription">“Excellent civil engineering firm I&#39;ve worked with many times throughout the past seven years, specifically on
residential development needs of contractors/builders and individuals I do arboricultural and project
management/consulting work for. As a daughter of a FHWA civil engineer, I understand the absolute
importance of this role within every project (large or small) I undertake. </p>
<p className="testimonialsDescription">
I have referred many clients to Eastside and have brought them onboard directly in my role as project
manager on my most challenging missions. I trust them and have enjoyed a great working partnership helping
me achieve my clients&#39; objectives with their experience and expertise in Civil Engineering AND their solid
working relationships with various municipalities.</p>
<p className="testimonialsDescription">
From their principal (Ron) to my lead civil engineer, Jerin (working a current, extremely challenging project
with me) to Kristy (office guru/front person extraordinaire) and their wonderful survey team who I ask a lot of
in oft inhospitable terrain and inclement weather. I recommend Eastside Consulting wholeheartedly!” </p>



{/* <img className='img2' src={img2} alt="pic2" /> */}

</div>

<div className ='testimonial'>
<h5 className="testimonialsTitle"> Gregg F. </h5> 
<p className="testimonialsDescription"> “Rob and team were great to work with over the past several years....reasonable charges and reasonable
people!” </p>
{/* <img className='img3' src={img3} alt="pic3" /> */}

</div>
<div className ='shortTestimonialsContainer'>

  
<div className ='testimonial'>
<h5 className="testimonialsTitle"> Mike A. </h5>
<p className="testimonialsDescription"> “Always on time, I'm glad I worked with Ron and Rob”</p>


</div>
<div className ='testimonial'>
<h5 className="testimonialsTitle"> Dave S. </h5>
<p className="testimonialsDescription"> “Excellent engineering firm been working with Rob for years!”</p>
</div>


</div>

<div className ='testimonial'>
<h5 className="testimonialsTitle"> Brad S. </h5>

<p className="testimonialsDescription">
“Sharp, professional and honest. I had a lot line question and they patiently laid out my options, even those that didn&#39;t include their services.
Ultimately, I decided to not use their services because it would have been overkill for my situation. But I really
appreciated their willingness to give honest advice even if it might cost them a job. If I ever need a surveyor, I&#39;ll talk with these folks first.” </p>
{/* <img className='img4' src={img4} alt="pic4" /> */}
</div>



     
<Footer />
     
    </div>

      
  )
}

export default Testimonials