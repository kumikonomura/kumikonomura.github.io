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
              dev tools
            </h2>
          </div>
          <div id="tools" className="container">
            <div className="row align-items-center">
              <div className="col">
                <div id="cards" className="card">
                  <div id="javascript" className="card-content">
                    Javascript
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div id="html" className="card-content">
                    HTML
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div id="css" className="card-content">
                    CSS
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div id="reactjs" className="card-content">
                    React JS
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card">
                  <div id="nodejs" className="card-content">
                    Node JS
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div id="materialui" className="card-content">
                    Material UI
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div id="bootstrap" className="card-content">
                    Bootstrap
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div id="visualstudio" className="card-content">
                    VS Code
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Skills;
