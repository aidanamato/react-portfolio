import React from "react";
import resumePdf from '../../../assets/aidan_amato_resume.pdf';

function Resume() {
  return (
    <section id="resume" className="resume">
        <h2 className="section-title">Resume</h2>
        <a href={resumePdf} target="_blank" rel="noreferrer">
          <div className="resume-card">
            <p>Resume Download</p>
            <i className="far fa-file-pdf"></i>
          </div>
        </a>
    </section>
  );
}

export default Resume;