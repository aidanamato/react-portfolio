import React from 'react';

function Aside({setMainContent}) {
  
  function setContent(event) {
    switch (event.target.textContent) {
      case 'About':
        setMainContent('about');
        break;
      case 'Work':
        setMainContent('work');
        break;
      case 'Contact Me':
        setMainContent('contact');
        break;
      case 'Resume':
        setMainContent('resume');
        break;
      default: 
        setMainContent('about');
    }
  }
  
  return (
    <aside>
      <div className="logo">
        <p><a href="/">A</a></p>
      </div>
      <nav>
        <ul>
          <li>
            <p onClick={setContent} >About</p>
          </li>
          <li>
            <p onClick={setContent} >Work</p>
          </li>
          <li>
            <p onClick={setContent} >Contact Me</p>
          </li>
          <li>
            <p onClick={setContent} >Resume</p>
          </li>
        </ul>
      </nav>
    </aside>
  )
};

export default Aside;