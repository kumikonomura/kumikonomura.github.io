import React from "react";
import Card from "react-bootstrap/Card";
import "./Skills.css";
import MediaQuery from "react-responsive";

const Skills = _ => {
  return (
    <>
      <section id="skills">
        <div id="skills_title" className="container">
          <h2
            id="dev_tools"
            className="page-section-heading text-center text-uppercase mb-0"
          >
            skills
          </h2>
        </div>
        <div id="tools" className="container">
          <div className="card">JavaScript</div>
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">React JS</div>
        <div className="card">Node JS</div>
        <div className="card">Material UI</div>
        <div className="card">Bootstrap</div>
        <div className="card">GitHub</div>
        </div>
      </section>
    </>
  );
};

export default Skills;
