import React from 'react';
import './fma-general.css';
import './fma-responsive.css';
import './style-responsive.css';
import './style.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';

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
        appleText="Google Plaay"
      />
    </div>
  );
}

export default App;