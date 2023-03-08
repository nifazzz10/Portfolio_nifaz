import React, { useEffect, useState } from "react";
import "./socialprofile.css";
import "../device view/icon.scss";
import Axios from "axios";
import gold from "../../img/gold.png";
import silver from "../../img/silver.png";
import bronze from "../../img/bronze.png";
import sof from "../../img/stackoverflow-icon.svg";
import "./stackoverflow.css";
const Stackoverflow = () => {
  const [sowdata, setsowdata] = useState("");

  const [sowdatan, setsowdatan] = useState("");
  const Apicall = () => {
    Axios.get(
      "https://api.stackexchange.com/2.2/users/17401372?site=stackoverflow.com"
    )
      .then(function (response) {
        // handle success
        let datas = response.data.items[0];
        console.log(datas);
        setsowdata(datas);
        setsowdatan(datas.badge_counts);
      })
      .catch(function (error) {
        // handle error
        console.log("its", error);
      });
  };

  useEffect(() => {
    Apicall();
  }, []);
  return (
    <>
      <img class="stk" src={sof}></img>
      <div>
        <div class="parent2">
          <div class="child2">
            <img class="profile" src={sowdata.profile_image}></img>
            <br></br>

            <div class="icons8-male-user">
              {" "}
              <h4 class="fonstk">{sowdata.display_name}</h4>
            </div>
            <br />
            <div class="icons8-webpage">
              <h4 class="fonstk">4k_views</h4>
            </div>
            <br />
            <div class="icons8-hyperlinks">
              {" "}
              <a href="https://stackoverflow.com/users/17401372/nifaz">
                <h4 class="fonstk">link</h4>
              </a>
            </div>
          </div>

          <div class="child2">
            <a href="https://github.com/nifazzz10/lostnfound-Frontend-repo">
              <img
                width="380px"
                align="center"
                class="stkcard"
                src=" https://stackoverflow-card.vercel.app/?userID=17401372&showLogo=true&theme=stackoverflow-dark"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Stackoverflow;
