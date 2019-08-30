import React from "react";
import Card from "react-bootstrap/Card";
import "./Portfolio.css";
import Posme from "../../images/posme.png";
import Popup from "reactjs-popup";
import MediaQuery from "react-responsive";


const Portfolio = _ => {
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <h2 id='portfolio_section' className="page-section-heading text-center text-uppercase mb=0">
            Portfolio
          </h2>
        </div>
        {/* PROJECT 1 */}
        <div className="card-deck">
          <div id='portfolio_cards' className="card">
            <img className='card-img-top' src={Posme} />
            <div  className="card-body text-center">
              <p className="card-text">PROJECT 1</p>
            </div>
          </div>
          <div id='portfolio_cards' className="card">
            <div className="card-body text-center">
              <p className="card-text">PROJECT 2</p>
            </div>
          </div>
          <div id='portfolio_cards' className="card">
            <div className="card-body text-center">
              <p className="card-text">PROJECT 3</p>
            </div>
          </div>
          <div id='portfolio_cards' className="card">
            <div className="card-body text-center">
              <p className="card-text">PROJECT 4</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

// const Portfolio = _ => {
//   return (
//     <>
//       <MediaQuery query="(max-width: 1455px)">
//         <section id="portfolio">
//           <div className="container">
//             <h2 className="page-section-heading text-center text-uppercase text-primary mb-0">
//               Portfolio
//             </h2>
//           </div>
//           {/* </section> */}
//           <div id="projects" className="container">
//             <div className="row">
//               <div className="col-sm">
//                 {/* POSME */}
//                 <Card className="posme" style={{ width: "18rem" }}>
//                   <Card.Img id="image" variant="top" src={Posme} />
//                   <Card.Body>
//                     <Card.Title id="title">POSME</Card.Title>
//                     <Card.Subtitle id="subtitles" className="mb-2 text-muted">
//                       React, React Hooks, MongoDB, Material UI, Passport, AWS S3
//                     </Card.Subtitle>
//                     <Card.Text>
//                       POSME (Point of Sale Made Easy) is a point-of-sale system
//                       for small businesses to use in their daily operations. It
//                       makes transactions efficient and simple while also
//                       tracking data such as sales and inventory.
//                     </Card.Text>
//                     <Card.Link
//                       target="_blank"
//                       href="https://morning-hamlet-37219.herokuapp.com/"
//                     >
//                       Deployed Site
//                     </Card.Link>
//                     <Card.Link
//                       target="_blank"
//                       href="https://github.com/kumikonomura/posme.git"
//                     >
//                       GitHub Repo
//                     </Card.Link>
//                   </Card.Body>
//                 </Card>
//               </div>
//               <div className="col-sm">
//                 {/* WHERE'S THE OFFICE */}
//                 <Card className="posme" style={{ width: "18rem" }}>
//                   <Card.Img id="image" variant="top" src={Posme} />
//                   <Card.Body>
//                     <Card.Title id="title">POSME</Card.Title>
//                     <Card.Subtitle id="subtitles" className="mb-2 text-muted">
//                       React, React Hooks, MongoDB, Material UI, Passport, AWS S3
//                     </Card.Subtitle>
//                     <Card.Text>
//                       POSME (Point of Sale Made Easy) is a point-of-sale system
//                       for small businesses to use in their daily operations. It
//                       makes transactions efficient and simple while also
//                       tracking data such as sales and inventory.
//                     </Card.Text>
//                     <Card.Link
//                       target="_blank"
//                       href="https://morning-hamlet-37219.herokuapp.com/"
//                     >
//                       Deployed Site
//                     </Card.Link>
//                     <Card.Link
//                       target="_blank"
//                       href="https://github.com/kumikonomura/posme.git"
//                     >
//                       GitHub Repo
//                     </Card.Link>
//                   </Card.Body>
//                 </Card>
//               </div>
//               <div className="col-sm">
//                 {/* PROJECT 3 */}
//                 <Card className="posme" style={{ width: "18rem" }}>
//                   <Card.Img id="image" variant="top" src={Posme} />
//                   <Card.Body>
//                     <Card.Title id="title">POSME</Card.Title>
//                     <Card.Subtitle id="subtitles" className="mb-2 text-muted">
//                       React, React Hooks, MongoDB, Material UI, Passport, AWS S3
//                     </Card.Subtitle>
//                     <Card.Text>
//                       POSME (Point of Sale Made Easy) is a point-of-sale system
//                       for small businesses to use in their daily operations. It
//                       makes transactions efficient and simple while also
//                       tracking data such as sales and inventory.
//                     </Card.Text>
//                     <Card.Link
//                       target="_blank"
//                       href="https://morning-hamlet-37219.herokuapp.com/"
//                     >
//                       Deployed Site
//                     </Card.Link>
//                     <Card.Link
//                       target="_blank"
//                       href="https://github.com/kumikonomura/posme.git"
//                     >
//                       GitHub Repo
//                     </Card.Link>
//                   </Card.Body>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </section>
//       </MediaQuery>
//     </>
//   );
// };

// export default Portfolio;
