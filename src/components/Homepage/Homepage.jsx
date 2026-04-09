import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "./Homepage.css";
import bmw from "../image/bmw.svg";
import audi from "../image/audi.svg";
import Footer from "../Footer/Footer.jsx"

import rollsroyce from "../image/rolls-royce.svg";
import landrover from "../image/land-rover.svg";
import volvo from "../image/volvo.svg";
import Animate from "./Animate.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="first-section">
        <div className="background">
          <div className="homecontainer">
            <div className="left-content">
              <Animate />
              <p>
                Whether you're heading to a busy event, catching a flight, or
                simply want peace of mind while you shop, booking ahead ensures
                you'll have a guaranteed spot waiting for you. Avoid the stress
                of finding a space on the fly and enjoy a seamless parking
                experience. Reserve now and make your journey smoother.
              </p>

              <div className="hero-btn">
                <button>
                  <Link className={"a"} to="/Country">
                    Available country
                  </Link>{" "}
                </button>
              </div>

              <div className="shopping">
                <p>They already collaborate with us:</p>

                <div className="brand-icons">
                  <div className="background">
                    <img src={bmw} alt="" />
                    <img src={audi} alt="" />
                    <img src={rollsroyce} alt=" " />
                    <img src={landrover} alt="  " />
                    <img src={volvo} alt="  " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="second-section">
        <div class="container">
          <div class="item item1">
            <p>100+</p>
            <p>Team Member</p>
          </div>
          <div class="item item2">
            <p>500+</p>
            <p>Total Parkings</p>
          </div>
          <div class="item item3">
            <p>130000+</p>
            <p>Happy Customers</p>
          </div>
        </div>
      </section>

      

                  <Footer />

    </>
  );
};

export default Home;