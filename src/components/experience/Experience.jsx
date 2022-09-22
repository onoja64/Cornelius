import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Fullstack Development</h3>
          <div className="experience__content">
            <article className="experience__details"></article>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">HTML</span>
          <div className="skill-bar">
            <span className="skill-per html">
              <span className="tooltip">97%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">CSS</span>
          <div className="skill-bar">
            <span className="skill-per css">
              <span className="tooltip">90%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">CSS</span>
          <div className="skill-bar">
            <span className="skill-per js">
              <span className="tooltip">90%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">ReactJS</span>
          <div className="skill-bar">
            <span className="skill-per reactjs">
              <span className="tooltip">85%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">UI/UX</span>
          <div className="skill-bar">
            <span className="skill-per uiux">
              <span className="tooltip">90%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Solidity</span>
          <div className="skill-bar">
            <span className="skill-per solidity">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">web3js</span>
          <div className="skill-bar">
            <span className="skill-per web3js">
              <span className="tooltip">90%</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
