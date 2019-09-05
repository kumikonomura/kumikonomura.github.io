import React from "react";
import "./About.css";

const About = _ => {
  return (
    <>
      <section class="page-section text-secondary mb-0" id="about">
        <div class="container">
          <h2
            id="about_me"
            class="page-section-heading text-center text-uppercase"
          >
            About Me
          </h2>

          <div class="row">
            <div id="first_paragraph" class="col-lg-4 ml-auto">
              <p id='intro' class="lead">
                Hi everyone! My name is Kumiko Nomura. I am a recent graduate
                from UC Irvine's Coding Bootcamp. Prior to the bootcamp, I
                worked as a financial accountant. After two years of working
                with financial statements and ledgers, I finally decided it was
                time to take a leap of faith and pursue what I've always been
                interested in, software development.
              </p>
            </div>
            <div id="second_paragraph" class="col-lg-4 mr-auto">
              <p class="lead">
                I am a big believer in constant learning and growth. I enjoy
                challenging myself in order to obtain new skills and broaden my
                horizons.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
