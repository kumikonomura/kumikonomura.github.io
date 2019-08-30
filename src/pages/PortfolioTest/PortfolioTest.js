import React from "react";
import Card from "react-bootstrap/Card";
import "./PortfolioTest.css";
import Posme from "../../images/posme.png";
import Office from "../../images/the_office.PNG";
import Popup from "reactjs-popup";
import MediaQuery from "react-responsive";

const Portfolio = _ => {
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <h2
            id="portfolio_section"
            className="page-section-heading text-center text-uppercase mb=0"
          >
            Portfolio
          </h2>
        </div>
      </section>
      <div id="portfolio_card" className="ui three stackable cards">
        <div id="posme_card" className="card">
          <div className="content">
            <img className="right floated mini ui image" src={Posme} />
            <div className="header">Posme</div>
            <div className="meta">
              React, React Hooks, MongoDB, Material UI, AWS S3
            </div>
            <div className="description">
              POSME (Point of Sale Made Easy) is a point-of-sale system for
              small businesses to use in their daily operations. It makes
              transactions efficient and simple while also tracking data such as
              sales and inventory.
            </div>
          </div>
          <div className="extra content">
            <div id="portfolio_buttons" className="ui two buttons">
              <div className="ui basic black button">
                <Card.Link
                  id="github_link"
                  target="_blank"
                  href="https://github.com/kumikonomura/posme.git"
                >
                  Github Repo
                </Card.Link>
              </div>
              <div className="ui basic black button">
                <Card.Link
                  id="deployed_link"
                  target="_blank"
                  href="https://morning-hamlet-37219.herokuapp.com/"
                >
                  Deployed Site
                </Card.Link>
              </div>
            </div>
          </div>
        </div>
        <div id="office_card" className="card">
          <div className="content">
            <img className="right floated mini ui image" src={Office} />
            <div className="header">Where's the Office?</div>
            <div className="meta">
              React, Material UI, Shuffle-Array (npm),{" "}
            </div>
            <div className="description">
              A memory game using characters from the hit television series, The
              Office. The goal of the game is to be able to click through all
              the characters without clicking them twice. Click one character
              twice and you lose. Watch out since the characters will randomly
              shuffle after one click!
            </div>
          </div>
          <div className="extra content">
            <div id="portfolio_buttons" className="ui two buttons">
              <div className="ui basic black button">
                <Card.Link
                  id="github_link"
                  target="_blank"
                  href="https://github.com/kumikonomura/clicky-game.git"
                >
                  Github Repo
                </Card.Link>
              </div>
              <div className="ui basic black button">
                <Card.Link
                  id="deployed_link"
                  target="_blank"
                  href="https://stark-badlands-11638.herokuapp.com/"
                >
                  Deployed Site
                </Card.Link>
              </div>
            </div>
          </div>
        </div>
        <div id="p3_card" className="card">
          <div className="content">
            <img
              class="right floated mini ui image"
              src="/images/avatar/large/jenny.jpg"
            />
            <div className="header">Project 3</div>
            <div className="meta">Tech Used</div>
            <div className="description">
              Jenny wants to add you to the group <b>best friends</b>
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic black button">
                <Card.Link
                  id="github_link"
                  target="_blank"
                  href="https://github.com/kumikonomura/clicky-game.git"
                >
                  Github Repo
                </Card.Link>
              </div>
              <div className="ui basic black button">
                <Card.Link
                  id="deployed_link"
                  target="_blank"
                  href="https://stark-badlands-11638.herokuapp.com/"
                >
                  Deployed Site
                </Card.Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
