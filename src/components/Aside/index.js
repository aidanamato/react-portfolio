import React from 'react';

function Aside({mainContent, setMainContent}) {
  
  function setContent(event) {
    switch (event.target.textContent) {
      case 'About':
        setMainContent('about');
        break;
      case 'Work':
        setMainContent('work');
        break;
      case 'Contact Me' :
        setMainContent('contact');
        break;
      default: 
        setMainContent('about');
    }
  }
  
  return (
    <aside>
      <div className="logo">
        <p>A</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about" onClick={setContent} >About</a>
          </li>
          <li>
            <a href="#work" onClick={setContent} >Work</a>
          </li>
          <li>
            <a href="#contact-me" onClick={setContent} >Contact Me</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
};

export default Aside;