import React from "react";

import campfireImg from '../../../assets/images/campfire-screenshot.png';
import techTalkImg from '../../../assets/images/tech-talk-screenshot.png';
import runBuddyImg from '../../../assets/images/run_buddy_screenshot.png';
import teamProfileGenImg from '../../../assets/images/team-profile-generator.png';
import employeeTrackerImg from '../../../assets/images/employee-tracker.png';

const projects = [
  {
    link: 'https://campfire-social-media.herokuapp.com/',
    image: campfireImg,
    title: 'Campfire',
    languages: 'CSS/JavaScript/Bootstrap'
  },
  {
    link: 'https://nameless-hollows-07003.herokuapp.com',
    image: techTalkImg,
    title: 'Tech Talk',
    languages: 'CSS/JavaScript/Bootstrap'
  },
  {
    link: 'https://aidanamato.github.io/run-buddy/',
    image: runBuddyImg,
    title: 'Run Buddy',
    languages: 'HTML/CSS'
  },
  {
    link: 'https://github.com/aidanamato/team-profile-generator',
    image: teamProfileGenImg,
    title: 'Team Profile Generator',
    languages: 'JavaScript/CSS'
  },
  {
    link: 'https://github.com/aidanamato/employee-tracker',
    image: employeeTrackerImg,
    title: 'Employee Tracker',
    languages: 'JavaScript/Express'
  }
]

function Work() {
  return (
    <section id="work" className="work">
      <h2 className="section-title">Work</h2>
      <div className="work-flex">
      {projects.map(project => (
        <div className="project">
          <a href={project.link} target="_blank" rel="noreferrer">
            <img src={project.image} alt='' />
          </a>
          <div className="project-text">
            <h3>{project.title}</h3>
            <p>{project.languages}</p>
          </div>
        </div>
      ))}
      </div>
    </section>


    
  )
}

export default Work;