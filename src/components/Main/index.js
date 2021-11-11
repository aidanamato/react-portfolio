import React from "react";

// components
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Footer  from "./Footer";

function Main() {
  return (
    <div className="main-content">
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default Main;