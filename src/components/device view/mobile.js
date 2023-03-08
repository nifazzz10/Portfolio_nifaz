import React from "react";
import "./device.scss";
const Mobileview = (props) => {
  return (
    <>
      <div class="parent">
        <figure
          class="iphone child"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0), #111),url(${props.bgurl})`,
          }}
        >
          Phone
        </figure>

        <figure
          class="ipad child "
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0), #111),url(${props.bgurl2})`,
          }}
        >
          Tablet
        </figure>
        <div class="child  ">
     
          <h4 class="projtitle">{props.title}</h4>
          <a
            target="blank"
            href={props.href}
            className="icons8-github"
          ></a>{" "}
          <a target="blank" href={props.href2} className="icons8-hyperlink"></a>
        </div>
      </div>
    </>
  );
};
export default Mobileview;
