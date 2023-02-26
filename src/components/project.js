import { useState } from "react";
import "../App.css";
import "../card.css";

import "./device view/device.scss";
import data from "./data";
import Mobileview from "./device view/mobile";
import Terminalview from "./terminalview/terminal";

const Project = () => {
  const [description, setDescription] = useState(true);
  const [reviews, setReviews] = useState(false);
  const descriptionHandler = () => {
    setDescription(true);
    setReviews(false);
  };
  const reviewsHandler = () => {
    setDescription(false);
    setReviews(true);
  };

  return (
    <>
      <section class="section d" id="portfolio">
        <div class="container text-center">
          <p class="section-subtitle">What I Did ?</p>
          <h6 class="section-title mb-6">Projects</h6>

          <div class="row ">
            <div class="col-md-6">
              {description && (
                <Terminalview title={data[0].title} desc={data[0].desc} />
              )}
              {reviews && (
                <Terminalview title={data[1].title} desc={data[1].desc} />
              )}
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <span class="stars"></span>

                    {description && (
                      <Mobileview
                        bgurl={data[0].bgurl}
                        bgurl2={data[0].bgurl2}
                      />
                    )}
                    {reviews && (
                      <Mobileview
                        bgurl={data[1].bgurl}
                        bgurl2={data[1].bgurl2}
                      />
                    )}
                  </div>
                </div>

                <div class="face face2">
                  <button onClick={descriptionHandler}>Descriptions</button>
                  <button onClick={reviewsHandler}>Reviews</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Project;
