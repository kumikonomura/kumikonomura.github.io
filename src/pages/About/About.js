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
                Hi everyone! My name is Kumiko Nomura. I come from an accounting background but tech has been calling my name from a young age. After working as a financial accountant for two years, I finally decided to take a leap of faith and pursue software development. I enrolled in a coding bootcamp and my love and interest for coding started there. I am a big believer in constant learning and growth. I enjoy challenging myself in order to obtain new skills and broaden my horizons.  
              </p>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default About;
