import React from "react";
import "./About.css";

const About = _ => {
  return (
    <>
      <section className="page-section text-secondary mb-0" id="about">
        <div className="container">
          <h2
            id="about_me"
            className="page-section-heading text-center text-uppercase"
          >
            About Me
          </h2>

          <div className="row">
            <div id="first_paragraph" class="container">
              <p id='first' className="lead">
                Hi everyone! My name is Kumiko Nomura. I am a recent graduate
                from UC Irvine's Coding Bootcamp. Prior to the bootcamp, I
                worked as a financial accountant. After two years of working
                with financial statements and ledgers, I finally decided it was
                time to take a leap of faith and pursue what I've always been
                interested in, software development. 
                I am a big believer in constant learning and growth. I enjoy challenging myself in order to obtain new skills and broaden my horizons.
              </p>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default About;
