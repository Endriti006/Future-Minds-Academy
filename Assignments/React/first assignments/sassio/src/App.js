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
import PowerfulFeatures from './Components/PowerfulFeatures';
import CustomerSection from './Components/CustomerSection';
import ArrowsSection from './Components/ArrowsSection';
import MetricsSection from './Components/MetricsSection';
import AppScreenshotSection from './Components/AppScreenshotSection';
import PricingSection from './Components/PricingSection';
import FAQSection from './Components/FaqSection';
import DownloadAppSection from './Components/DownloadAppSection';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

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
<PowerfulFeatures
buttonText="OUR FEATURES"
title="Powerful Features"
feature1Title="Theme Made Easy"
feature1Text="Our astonishing style structure makes your customization process a breeze"
feature2Title="Powerful Design"
feature2Text="With ready-to-use content you'll deploy your implementation in no time"
feature3Title="Creative Content"
feature3Text="Repetitive styles all across the web? Nevermind that! Shine with unique styles"
/>
<CustomerSection
  buttonText="EXPLORE NEW PLACES"
  header="What our customer says"
  review1Title="Design Quality"
  review1Text="The template is really nice and offers quite a large set of options. It’s beautiful and the coding is done quickly and seamlessly. Thank you!"
  reviewer1Name="Devon Lane"
  reviewer1Position="Team Leader, Paypal"
  review2Title="Design Quality"
  review2Text="The template is really nice and offers quite a large set of options. It’s beautiful and the coding is done quickly and seamlessly. Thank you!"
  reviewer2Name="Theresa Webb"
  reviewer2Position="Software Tester, Envato"
/>
<ArrowsSection
  arrowWestClass="west"
  arrowEastClass="east"
/>
<MetricsSection
        components="773"
        downloads="1254"
        followers="14941"
        newUser="1254"
      />
      <AppScreenshotSection
        buttonText="EXPLORE NEW PLACES"
        title="App ScreenShot"
      />

<PricingSection
        plansButtonText="PLANS"
        pricingTitle="Simple Pricing"
        basicPlanText="Free"
        professionalPlanText="$599.95"
        businessPlanText="$999.95"
        getStartedText="GET STARTED"
      />
      <FAQSection
        buttonText="GET HELP (HELP CENTER)"
        heading="Frequently asked questions."
      />

<DownloadAppSection
        buttonText="START TODAY"
        heading="Download the App"
        paragraph="New features. New appearance. No risk and credit card required."
      />
        <Footer /> 
        <ScrollToTop /> 

    </div>
  );
}

export default App;