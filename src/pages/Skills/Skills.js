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
          <div id="card_style" className="card">
            JavaScript
          </div>
          <div id="card_style" className="card">
            HTML
          </div>
          <div id="card_style" className="card">
            CSS
          </div>
          <div id="card_style" className="card">
            React JS
          </div>
          <div id="card_style" className="card">
            Node JS
          </div>
          <div id="card_style" className="card">
            Material UI
          </div>
          <div id="card_style" className="card">
            Bootstrap
          </div>
          <div id="card_style" className="card">
            GitHub
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
