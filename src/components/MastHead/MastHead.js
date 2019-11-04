import React from "react";
import Profile from "../../images/profile_pic_2.jpg";
import "./MastHead.css";
import MediaQuery from "react-responsive";

const MastHead = _ => {
  return (
    <>
      <MediaQuery query="(max-width: 1824px)">
        <header id="profile" className="masthead text-white text-center">
          <div className="container d-flex align-items-center flex-column">
            <div className="profileImage">
              <img className="avatar" src={Profile} />
            </div>

            {/* <h1 className="masthead-heading text-uppercase mb-0">
              KUMIKO NOMURA
            </h1> */}

            <p id="role" className="masthead-subheading font-weight-light mb-0">
              Full-Stack Developer
            </p>
            <br />
            <div className="social-icons">
              <a target="_blank" href="https://linkedin.com/in/kumikonomura">
                <i class="fa fa-linkedin" />
              </a>
              <a target="_blank" href="https://github.com/kumikonomura">
                <i class="fa fa-github" />
              </a>
              <a href="mailto:knomurap@gmail.com">
                <i className="fa fa-envelope" />
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/0B4WTvF32jt9OaXlNbTl6aFRMd2RwSFhTUUpweXVDcE1ueUhn/view?usp=sharing"
              >
                <i className="fa fa-file" />
              </a>
            </div>
          </div>
        </header>
      </MediaQuery>
    </>
  );
};

export default MastHead;
