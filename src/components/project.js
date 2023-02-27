import { useState } from "react";
import "../App.css";
import "../card.css";
import './device view/icon.scss'
import "./device view/device.scss";
import data from "./data";
import Mobileview from "./device view/mobile";
import Terminalview from "./terminalview/terminal";
import Icon from "./device view/icon";

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
            <div class="col-md-5">
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
                        href={data[0].href}
                        href2={data[0].href2}
                        title={data[0].title}
                      />
                    )}
                    {reviews && (
                      <Mobileview
                        bgurl={data[1].bgurl}
                        bgurl2={data[1].bgurl2}
                        href={data[1].href}
                        href2={data[1].href2}
                        title={data[1].title}
                      />
                    )}
                     
                  </div>
                </div>
                <div class="face face2">
              
              
                  
                </div>
              </div>
            </div>
            <div class='col-md-1'> 
             <button class ="icons8-fuel"onClick={descriptionHandler}></button>
                  <button  class ="icons8-comments" onClick={reviewsHandler}></button></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Project;
