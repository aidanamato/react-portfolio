import React from "react";

// components
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Resume  from "./Resume";
import Footer  from "./Footer";

function Main({mainContent}) {
  return (
    <div className="main-content">
      {mainContent === 'about' && <About />}
      {mainContent === 'work' && <Work />}
      {mainContent === 'contact' && <Contact />}
      {mainContent === 'resume' && <Resume />}
      <Footer />
    </div>
  )
}

export default Main;