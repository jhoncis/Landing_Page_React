import React from "react";
import { Navbar } from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./Cards.jsx";
import Foot from "./foot.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <Jumbotron />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4">
            <Cards />
          </div>
		  <div className="col-lg-3 col-md-4">
            <Cards />
          </div>
		  <div className="col-lg-3 col-md-4">
            <Cards />
          </div>
		  <div className="col-lg-3 col-md-4">
            <Cards />
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Home;
