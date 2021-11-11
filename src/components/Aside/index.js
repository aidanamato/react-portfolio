import React from 'react';

function Aside() {
  return (
    <aside>
      <div className="logo">
        <p>A</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
};

export default Aside;