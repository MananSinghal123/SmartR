import React from "react";
import bannerImg from "../assets/img/head-img.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="image_container">
        <img src={bannerImg} alt="" />
      </div>
      <div className="banner_content">
        scsjt, iure obcaecati, voluptates dolorem at quos rerum. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Aliquam incidunt dolorem
        beatae eaque ullam. Temporibus, et perspiciatis. Inventore dolore
        nesciunt nemo explicabo architecto officiis quam, dolores labore
        consequuntur sint ad. placeat itaque quo. Ipsam, in provident? Impedit,
        quasi culpa qui architecto placeat, iure obcaecati, voluptates dolorem
        at quos rerum.
      </div>
    </div>
  );
}

export default Banner;
