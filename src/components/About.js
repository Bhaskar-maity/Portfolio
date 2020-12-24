import React, { Component } from "react";
import "react-bootstrap";
import Fade from "react-reveal/Fade";
import data from "../mydata";
import myImg from "../images/MyImg1.jpg";

const About = () => {
  return (
    <Fade bottom>
      <div className="container ">
        <h1 className="pb-5 text-center">About.</h1>
        <hr class="ribbon" />
        <hr class="ribbon-little" />
        <div className="row about">
          <div className="about-content col-md-6">
            <p>{data.abouttext[0]}</p>
            <p>{data.abouttext[1]}</p>
            <p>{data.abouttext[2]}</p>
          </div>

          <div className="col-md-6 about-img">
            {data.ShowAboutImage ? (
              <img src={myImg} alt="about iamge" className="img-fluid"></img>
            ) : null}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default About;
