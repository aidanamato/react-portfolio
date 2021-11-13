import React from "react";

// project screenshots
import campfireImg from '../../../assets/images/campfire-screenshot.png';
import techTalkImg from '../../../assets/images/tech-talk-screenshot.png';
import runBuddyImg from '../../../assets/images/run_buddy_screenshot.png';
import teamProfileGenImg from '../../../assets/images/team-profile-generator.png';
import employeeTrackerImg from '../../../assets/images/employee-tracker.png';

const projects = [
  {
    link: 'https://campfire-social-media.herokuapp.com/',
    repo: 'https://github.com/Padredilg/campfire',
    image: campfireImg,
    title: 'Campfire',
    languages: 'CSS/JavaScript/Bootstrap'
  },
  {
    link: 'https://nameless-hollows-07003.herokuapp.com',
    repo: 'https://github.com/aidanamato/tech-blog',
    image: techTalkImg,
    title: 'Tech Talk',
    languages: 'CSS/JavaScript/Bootstrap'
  },
  {
    link: 'https://aidanamato.github.io/run-buddy/',
    repo: 'https://github.com/aidanamato/run-buddy',
    image: runBuddyImg,
    title: 'Run Buddy',
    languages: 'HTML/CSS'
  },
  {
    link: 'https://github.com/aidanamato/team-profile-generator',
    repo: 'https://github.com/aidanamato/team-profile-generator',
    image: teamProfileGenImg,
    title: 'Team Profile Generator',
    languages: 'JavaScript/CSS'
  },
  {
    repo: 'https://github.com/aidanamato/employee-tracker',
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
      {/* For each project make a project card */}
      {projects.map(project => (
        <div className="project" key={project.title}>
          <img src={project.image} alt='' />
          <div className="project-text">
            <h3>{project.title}</h3>
            <p>{project.languages}</p>
            <div className="project-links">
              {/* If project is deployed live create a live button on it's card */}
              {project.link && <a href={project.link} target="_blank" rel="noreferrer"><button className="live">Live</button></a>}
              <a href={project.repo} target="_blank" rel="noreferrer"><button className="repository">Repository</button></a>
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Work;