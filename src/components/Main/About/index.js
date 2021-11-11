import React from 'react';
import profileImg from '../../../assets/images/aidan_amato_profile.jpeg';

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-flex">
        <img src={profileImg} alt="Aidan Amato" />
        <p>
          Full Stack Web Developer with a passion for developing exceptional online user experiences. Earned a certificate in full stack web development through the University of Central Florida. Proficient in both frontend and backend technologies such as: HTML, CSS, JavaScript, Node.js, and React. Great at learning new technologies quickly and excel in fast paced, collaborative work environments. Recently worked on a team of four to develop a full stack social media web application designed for coding boot camp students to connect and share their progress. Passionate about utilizing my problem solving and collaborative skill sets in creating outstanding user experiences on the web.
        </p>
      </div>
    </section>
  )
}

export default About