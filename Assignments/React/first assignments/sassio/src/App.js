import React from 'react';
import './fma-general.css';
import './fma-responsive.css';
import './style-responsive.css';
import './style.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Trusted from './Components/Trusted';
import NewComponentName from './Components/NewComponentName';
import Row from './Components/Row'

function App() {
  return (
    <div className="App">
      <Nav activePage="active" />
      <Hero
        title="Premium Startup & App"
        title1="Landing Page"
        paragraph={`Besides its beautiful design.\nSassio is an incredibly 
        rich core\nframework for you to showcase your App.`}
        buttonDownload="Get it on"
        appleText="Google Play"
      />
      <Trusted paragraph="Trusted by the world's best" />
      <NewComponentName
        button1Text="SAFETY FIRST"
        heading1="You're in a secure company"
        section1Title="Real time activity"
        section1Paragraph="Get instant insight on what's happening in your business. It uses a dictionary of the over 200 Latin words."
        section2Title="Instant deploy"
        section2Paragraph="Deploy your project in a fraction of a second, no time! It uses a dictionary of the over 200 Latin words."
        section3Title="Easy integrations"
        section3Paragraph="Integrate our solution with other tech leaders in the industry. It uses a dictionary of the over 200 Latin words."
        section4Title="Perfect UI/UX"
        section4Paragraph="Get instant insight on what's happening in your business. It uses a dictionary of the over 200 Latin words."
        benefitButtonText="SAFETY FIRST"
        benefitHeading="Tons of benefit"
        benefitItems1={["Development", "Web Design", "Do Magic", "Save Time"]}
        benefitItems2={["App builder", "Dashboard", "Feedback"]}
        freeTrialButtonText="FREE TRIAL"
      />
      <Row
       title="Path to Success"
       buttonText="WE ARE YOUR ONLY"
       section1Title="Mail Management"
       section1Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut autem eum laudantium quas recusandae."
       section2Title="Customers Tracking"
       section2Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut autem eum laudantium quas recusandae."
       section3Title="Advanced Reporting"
       section3Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut autem eum laudantium quas recusandae."
/>

    </div>
  );
}

export default App;