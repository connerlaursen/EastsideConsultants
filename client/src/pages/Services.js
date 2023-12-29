import React from 'react';
import FormModal from '../components/FormModal';
import Footer from '../components/Footer';

function Services() {
  function scrollToService(id) {
    const element = document.getElementById(id);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  
      const scrollPosition = elementRect.top + elementRect.height / 2 - viewHeight / 2;
  
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
  
      // Highlight effect by changing background color to dark green with rounded corners
      const originalBgColor = element.style.backgroundColor; // Store the original background color
      const originalBorderRadius = element.style.borderRadius; // Store the original border radius
  
      element.style.transition = 'background-color 0.8s ease, border-radius 0.7s ease'; // Adding border-radius transition
      element.style.backgroundColor = 'rgba(0, 100, 0, 0.7)'; // Dark green with adjusted RGB values
      element.style.borderRadius = '4px'; // Rounded corners
  
      // Reset the background color and border radius after a delay (e.g., 1 second)
      setTimeout(() => {
        element.style.backgroundColor = originalBgColor;
        element.style.borderRadius = originalBorderRadius;
      }, 1000);
    }
  }
  
  
  
  
  
  return (
    <div className="servicesWrapper">
      <div className="servicesSection">
        <h1 className="servicesHeader">Survey Services</h1>
        <h5 className="servicesTitle"> <br></br> </h5>
        <ul className="servicesList">
<li onClick={() => scrollToService('boundarySurveys')}>Boundary Surveys</li>
<li onClick={() => scrollToService('constructionStaking')}>Construction Staking</li>
<li onClick={() => scrollToService('asBuiltSurveys')}>As-Built Surveys</li>
<li onClick={() => scrollToService('topographicSurveys')}>Topographic Surveys & Mapping</li>
<li onClick={() => scrollToService('wetlandLocationSurveys')}>Wetland Location Surveys</li>
<li onClick={() => scrollToService('altaSurveys')}>ALTA Surveys</li>
<li onClick={() => scrollToService('easementDescriptionExhibit')}>Easement Description & Exhibit</li>
<li onClick={() => scrollToService('boundaryLineAdjustments')}>Boundary Line Adjustments</li>
<li onClick={() => scrollToService('routeSurveys')}>Route Surveys</li>
<li onClick={() => scrollToService('rightOfWayAcquisition')}>Right of Way Acquisition</li>
<li onClick={() => scrollToService('encroachmentSurveys')}>Encroachment Surveys</li>
<li onClick={() => scrollToService('legalDescriptions')}>Legal Descriptions</li>
<li onClick={() => scrollToService('aerialSurveyGroundControl')}>Aerial Survey Ground Control</li>
<li onClick={() => scrollToService('cadastralRetracementSurveys')}>Cadastral Retracement Surveys</li>

        </ul>
      </div>
      <div className="servicesSection">
        <h1 className="servicesHeader">Civil Services</h1>
        <h5 className="servicesTitle"> <br></br> </h5>
        <ul className="servicesList">
<li onClick={() => scrollToService('drainageAnalysisReports')}>Drainage Analysis & Reports</li>
<li onClick={() => scrollToService('gradingPlans')}>Grading Plans</li>
<li onClick={() => scrollToService('roadStreetDesign')}>Road & Street Design</li>
<li onClick={() => scrollToService('stormDetention')}>Storm Detention</li>
<li onClick={() => scrollToService('stormDetention')}>Water Quality Design</li>
<li onClick={() => scrollToService('utilitiesDesign')}>Utilities Design</li>
<li onClick={() => scrollToService('sepaChecklists')}>SEPA Checklists</li>
<li onClick={() => scrollToService('residentialSubdivisionDesign')}>Residential Subdivision Design</li>
<li onClick={() => scrollToService('residentialSubdivisionDesign')}>Short Plat Design</li>
<li onClick={() => scrollToService('commercialSiteDevelopment')}>Commercial Site Development</li>

        </ul>
        
<div><FormModal />
        <div className="servicesListBackground">
            
        
        <div className="servicesListItem">
        <h2 className="servicesListTitle" id="boundarySurveys">Boundary Surveys </h2>
      <p className="servicesDescription">A boundary survey is a process carried out to determine property lines and define true property corners
of a parcel of land described in a deed. It also indicates the extent of any easements or encroachments
and may show the limitations imposed on the property by state or local regulations. </p>
</div>
<div className="servicesListItem">
    <h2 className="servicesListTitle" id="constructionStaking">Construction Staking</h2>
    <p className="servicesDescription">Construction staking involves placing markers on the ground according to 
        proposed building plans. These markers denote where buildings, utilities, and roads are to be constructed based 
        on architectural or engineering blueprints.</p>
</div>

<div className="servicesListItem">
    <h2 className="servicesListTitle" id="asBuiltSurveys">As-Built Surveys</h2>
    <p className="servicesDescription">An As-Built survey documents the exact location of constructed elements 
        compared to initial design plans. It records the final positions of structures, utilities, and infrastructure,
        which may differ from the original proposed locations.</p>
</div>

<div className="servicesListItem">
    <h2 className="servicesListTitle" id="topographicSurveys">Topographic Surveys & Mapping</h2>
    <p className="servicesDescription">Topographic surveys map out a property's natural and man-made features in 
        three dimensions. They detail elevations, natural contours, and artificial structures, providing a comprehensive 
        view of the property's landscape.</p>
</div>

<div className="servicesListItem">
    <h2 className="servicesListTitle" id="wetlandLocationSurveys">Wetland Location Surveys</h2>
    <p className="servicesDescription">Wetland delineation surveys establish the boundaries between wetlands and 
        uplands on a property. They identify and mark the areas designated as wetlands, crucial for regulatory compliance.</p>
</div>
<div className="servicesListItem">
    <h2 className="servicesListTitle" id="altaSurveys">ALTA Surveys</h2>
    <p className="servicesDescription">An ALTA Survey is a comprehensive land survey revealing property boundaries, 
        improvements, utilities, and significant features within the insured estate. It's especially detailed and 
        typically adheres to specific standards set by the American Land Title Association.</p>
</div>

<div className="servicesListItem">
    <h2 className="servicesListTitle" id="easementDescriptionExhibit">Easement Description & Exhibit</h2>
    <p className="servicesDescription">Easement descriptions clarify rights of access or use granted to a party over 
        another's property. They define passages or shared access points, such as driveways, enabling one property to 
        access another.</p>
</div>
<div className="servicesListItem">
    <h2 className="servicesListTitle" id="boundaryLineAdjustments">Boundary Line Adjustments</h2>
    <p className="servicesDescription">Boundary line adjustments involve altering property lines between existing 
        lots without creating additional parcels. They're intended to adjust boundaries, often without changing the 
        number of lots or their conforming status.</p>
</div>
<div className="servicesListItem">
    <h2 className="servicesListTitle" id="routeSurveys">Route Surveys</h2>
    <p className="servicesDescription">Route Surveys meticulously map designated paths for construction projects, analyzing terrain and property boundaries to determine optimal routes.</p>
</div>

<div className="servicesListItem">
    <h2 className="servicesListTitle" id="rightOfWayAcquisition">Right of Way Acquisition</h2>
    <p className="servicesDescription">Right of Way Acquisition involves obtaining legal land usage rights for infrastructure projects through negotiations with property owners, ensuring necessary access for construction.</p>
</div>


<div className="servicesListItem">
    <h2 className="servicesListTitle" id="encroachmentSurveys">Encroachment Surveys</h2>
    <p className="servicesDescription">Encroachment surveys identify instances where property boundaries are 
        violated, resembling trespassing. They document unauthorized usage or infringement on neighboring properties.</p>
</div>

<div className="servicesListItem">
    <h2 className="servicesListTitle" id="legalDescriptions">Legal Descriptions</h2>
    <p className="servicesDescription">Legal descriptions provide precise details about a property's size, shape,
        boundaries, and easements. They're crucial for real estate transactions, offering exact information for legal 
        purposes.</p>
</div>

<div className="servicesListItem">
    <h2 className="servicesListTitle" id="aerialSurveyGroundControl">Aerial Survey Ground Control</h2>
    <p className="servicesDescription">Aerial survey ground control utilizes marked targets on the ground to 
        facilitate the collection of geospatial or imagery data from aircraft or helicopters, ensuring accuracy
        in aerial surveys.</p>
</div>

<div className="servicesListItem">
    <h2 className="servicesListTitle" id="cadastralRetracementSurveys">Cadastral Retracement Surveys</h2>
    <p className="servicesDescription">Cadastral retracement surveys re-establish the boundaries and corners
        of a parcel of land based on existing legal descriptions or deeds, ensuring accuracy in property 
        boundary delineation.</p>
</div>
<div className="servicesListItem">
    <h2 className="servicesListTitle" id="drainageAnalysisReports">Drainage Analysis & Reports</h2>
    <p className="servicesDescription">Drainage analysis involves interpreting land structures in low relief areas, considering drainage patterns, texture, stream patterns, and anomalies for accurate assessment.</p>
</div>

<div className="servicesListItem">
    <h2 className="servicesListTitle" id="gradingPlans">Grading Plans</h2>
    <p className="servicesDescription">Grading plans specify the post-construction surface details, depicting the expected ground after construction based on land development plans.</p>
</div>

<div className="servicesListItem">
    <h2 className="servicesListTitle" id="roadStreetDesign">Road & Street Design</h2>
    <p className="servicesDescription">Road and street design focuses on planning and designing traffic flow, safety, and infrastructure for roads and streets.</p>
</div>

<div className="servicesListItem">
    <h2 className="servicesListTitle" id="stormDetention">Storm Detention & Water Quality Design</h2>
    <p className="servicesDescription">Stormwater detention captures rainwater before release into storm drains, ensuring water quality by managing pollutants.</p>
</div>
<div className="servicesListItem">
    <h2 className="servicesListTitle" id="utilitiesDesign">Utilities Design</h2>
    <p className="servicesDescription">Utilities design focuses on planning and designing infrastructure for water supply, sewage, electricity, etc., in a planned area.</p>
</div>

<div className="servicesListItem">
    <h2 className="servicesListTitle" id="sepaChecklists">SEPA Checklists</h2>
    <p className="servicesDescription">SEPA checklists ensure compliance with environmental regulations during land development projects under the State Environmental Policy Act.</p>
</div>

<div className="servicesListItem">
    <h2 className="servicesListTitle" id="residentialSubdivisionDesign">Residential Subdivision & Short Plat Design</h2>
    <p className="servicesDescription">Residential subdivision involves dividing land into lots, tracts, or parcels for sale, lease, or transfer. Short plat design divides land into fewer lots for sale or transfer.</p>
</div>

<div className="servicesListItem">
    <h2 className="servicesListTitle" id="commercialSiteDevelopment">Commercial Site Development</h2>
    <p className="servicesDescription">Commercial site development focuses on developing land for commercial purposes such as office buildings, retail stores, factories, or renovating existing commercial buildings.</p>
</div>


 </div>
 </div>

 <FormModal />
      </div>
      <footer>
        
      <Footer />
      </footer>
    </div>
  );
}

export default Services;
