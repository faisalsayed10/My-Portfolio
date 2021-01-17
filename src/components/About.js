import React from "react";
import "./About.css";

const MyImage = "https://bit.ly/38W2wCl";

const About = () => {
  return (
    <div id="about" className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-me">
        <img className="myPic" src={MyImage} alt="My Pic" />
        <p className="text-content">
          <span className="txt1">Hi! I'm Faisal Sayed,</span>
          <span className="txt4"> A 15 yo high schooler</span>
          <span className="txt5"> and I love to code.</span>
          <span className="txt7"> I can build </span>
          <span className="txt1">sweet looking full-stack websites! </span>
          <span className="txt9"> I also like playing games!</span>
        </p>
      </div>
    </div>
  );
};

export default About;
