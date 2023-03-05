import React, { useEffect, useState } from "react";
import git from "../../../img/github.png"
import Axios from "axios";
import GitHubCalendar from "react-github-calendar";
import "./github.css";
import Card from "react-github-stats-card/dist/Card";
const Github = () => {
  return (
    <>
    
    <div class="inlines m"><img width="50px"src={git}></img></div>
    <div  class="inlines l">
        {" "}
        <a href="https://github.com/nifazzz10/lostnfound-Frontend-repo">
          <img
            width="380px"
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=nifazzz10"
          />
        </a>
  
        <a href="https://github.com/nifazzz10/lostnfound-Frontend-repo">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=nifazzz10&layout=compact"
          />
        </a>{" "}
  
      {/* <a href="https://github.com/nifazzz10/lostnfound-Frontend-repo">
    <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=nifazzz10&repo=lostnfound-Frontend-repo" />
  </a>
   

    <a href="https://github.com/nifazzz10/Daily-Fuel-Price-Api-Using-Flask">
    <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=nifazzz10&repo=Daily-Fuel-Price-Api-Using-Flask" />
  </a> */}
 
        {" "}
        <GitHubCalendar style={{ width: "77%",display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginLeft:'18%',
    alignContent: 'center' }} username="nifazzz10" />
      
      </div>
    </>
  );
};
export default Github;
