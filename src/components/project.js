import { useState } from "react";
import "../App.css";
import "../card.css";
import "./device view/icon.scss";
import "./device view/device.scss";
import data from "./data";
import Mobileview from "./device view/mobile";
import Terminalview from "./terminalview/terminal";
import Icon from "./device view/icon";

const Project = () => {
  const [fuelprice, setfuelprice] = useState(true);
  const [commentsection, setcommentsection] = useState(false);
  const [lostnfound, setlostnfound] = useState(false);
  const fuelpriceHandler = () => {
    setfuelprice(true);
    setcommentsection(false);
    setlostnfound(false);
  };
  const commentsectionHandler = () => {
    setfuelprice(false);
    setcommentsection(true);
    setlostnfound(false);
  };
  const lostnfoundHandler = () => {
    setfuelprice(false);
    setcommentsection(false);
    setlostnfound(true);
  };

  return (
    <>
  
      <section class="section d" id="portfolio">
        <div class="container text-center">
          <p class="section-subtitle">What I Did ?</p>
          <h6 class="section-title mb-6">Projects</h6>

          <div class="row ">
            <div class="col-md-5">
              {fuelprice && (
                <Terminalview
                  title={data[0].title}
                  desc={data[0].desc}
                  tech={data[0].tech}
                />
              )}
              {commentsection && (
                <Terminalview
                  title={data[1].title}
                  desc={data[1].desc}
                  tech={data[1].tech}
                />
              )}
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <span class="stars"></span>

                    {fuelprice && (
                      <Mobileview
                        bgurl={data[0].bgurl}
                        bgurl2={data[0].bgurl2}
                        href={data[0].href}
                        href2={data[0].href2}
                        title={data[0].title}
                      />
                    )}
                    {commentsection && (
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
                <div class="face face2"></div>
              </div>
            </div>
            <div class="col-md-1 iconss">
              <button class="icons8-fuel" onClick={fuelpriceHandler}></button>
              <button class="icons8-comments" onClick={commentsectionHandler}></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Project;
