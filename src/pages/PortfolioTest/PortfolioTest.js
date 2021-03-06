import React from "react";
import Card from "react-bootstrap/Card";
import "./PortfolioTest.css";
import Sbtb from "../../images/sbtb.PNG";
import Office from "../../images/the_office.PNG";
import Bootcamp from "../../images/bootcamp.PNG";

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
            <img className="right floated mini ui image" src={Sbtb} />
            <div className="header">Saved by The Bell: Trivia</div>
            <div className="meta">React JS, Semantic UI</div>
            <div className="description">
              A fun trivia game based on the 90's show, Saved by The Bell.
            </div>
          </div>
          <div className="extra content">
            <div id="portfolio_buttons" className="ui two buttons">
              <div className="ui basic black button">
                <Card.Link
                  id="github_link"
                  target="_blank"
                  href="https://github.com/kumikonomura/sbtb-trivia.git"
                >
                  Github Repo
                </Card.Link>
              </div>
              <div className="ui basic black button">
                <Card.Link
                  id="deployed_link"
                  target="_blank"
                  href="https://safe-fortress-12935.herokuapp.com/"
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
            <div className="meta">React, Material UI, Shuffle-Array (npm)</div>
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
            <img class="right floated mini ui image" src={Bootcamp} />
            <div className="header">My BOOtcamp</div>
            <div className="meta">
              React, Express Server, MySQL, Material UI, Firebase
            </div>
            <div className="description">
              A dating and networking app tailored for coding bootcamp students.
              The app matches you with others based off your tech and personal
              interests. Additionally, there is a swipe effect implemented in
              the app for the user to narrow down the specific individuals they
              want to connect with.
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic black button">
                <Card.Link
                  id="github_link"
                  target="_blank"
                  href="https://github.com/kumikonomura/My-BOOtcamp.git"
                >
                  Github Repo
                </Card.Link>
              </div>
              <div className="ui basic black button">
                <Card.Link
                  id="deployed_link"
                  target="_blank"
                  href="https://github.com/kumikonomura/My-BOOtcamp.git"
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
