import React from "react";

import linkedinLogo from '../../../assets/images/linkedin_logo.png';
import githubLogo from '../../../assets/images/github_logo.png';

function Footer() {
  return (
    <footer>
      <div className="footer-flex">
        {/*Logo PNG's courtesy of www.freepnglogos.com*/}
        <a href="https://www.linkedin.com/in/aidan-amato-a53b98210" target="_blank" rel="noreferrer">
          {/*https://www.freepnglogos.com/images/linkedin-logo-png-1825.html*/}
          <img src={linkedinLogo} alt="Linkedin logo."/>
        </a>
        <a href="https://github.com/aidanamato" target="_blank" rel="noreferrer">
          {/*https://www.freepnglogos.com/images/512x512-logo-27148.html*/}
          <img src={githubLogo} alt="Github logo." />
        </a>
        <p>© Aidan Amato 2021</p>
      </div>
    </footer>
  )
}

export default Footer;