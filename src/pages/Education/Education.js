import React from "react";
import "./Education.css";

const Education = _ => {
  return (
    <section id="education" class="section scrollspy">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-primary mb-0">
          Education
        </h2>
        {/* <hr /> */}
        <div id="schools" className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                  <p>
                    <span className="card-title">
                      <a
                        target="_blank"
                        href="https://laverne.edu/"
                        class="teal-text hoverline"
                      >
                        University of La Verne
                      </a>
                    </span>
                  </p>
                  <p className="brown-text">La Verne, CA</p>
                  <ul>
                    <li>B.S. Accounting</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                  <p>
                    <span className="card-title">
                      <a
                        target="_blank"
                        href="https://uci.edu/"
                        className="teal-text hoverline"
                      >
                        University of California, Irvine
                      </a>
                    </span>
                  </p>
                  <p className="brown-text">Irvine, CA</p>
                  <ul>
                    <li>Coding Bootcamp</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
