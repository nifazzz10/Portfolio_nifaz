import React from "react";
import "./socialprofile.css";

import Axios from "axios";
import Stackoverflow from "./stackoverflow";
import Github from "./githubprofile/github";
import { useState } from "react";
import Leet from "./leetprofile/leet";
import sof from "../../img/stackoverflow-icon.svg";
const Socialprofile = () => {
  const [git, setgit] = useState(true);
  const [stk, setstk] = useState(false);
  const [leet, setleet] = useState(false);
  const gitHandler = () => {
    setgit(true);
    setstk(false);
    setleet(false);
  };
  const stkHandler = () => {
    setgit(false);
    setstk(true);
    setleet(false);
  };
  const leetHandler = () => {
    setgit(false);
    setstk(false);
    setleet(true);
  };

  return (
    <>
      <section class="section socialprofile">
        <div class="container text-center ws">
          <p class="section-subtitle stats">Stats</p>
          <h6 class="section-title mb-6 sp">Social Profile</h6>

          <div class="row ">
            <div class="col-md-11">
              <div class="social">
                {git && <Github />}
                {stk && <Stackoverflow />}
                {leet && <Leet />}
              </div>
            </div>
            <div class="col-md-1 iconss">
              <button
                class="icons8-stack-overflow-is-a-question-and-answer-site-for-professional"
                onClick={stkHandler}
              ></button>
              <button class="icons8-githubss" onClick={gitHandler}></button>
              <button
                class="icons8-level-up-your-coding-skills-and-quickly-land-a-job"
                onClick={leetHandler}
              ></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Socialprofile;
