import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscNewFolder } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="about__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta,
          eos itaque quos, sunt error rerum natus iusto possimus deserunt at
          laboriosam, nesciunt dignissimos vero? Pariatur accusamus asperiores
          cupiditate ducimus!
        </p>
        <div className="about__cards">
          <article className="about__card">
            <h5>Experience</h5>
            <small>2+ Years</small>
            <br></br>
            <FaAward className="about__icon" />
          </article>

          <article className="about__card">
            <h5>Clients</h5>
            <small>50+ Clients</small>
            <br></br>
            <FiUsers className="about__icon" />
          </article>

          <article className="about__card">
            <h5>Projects</h5>
            <small>20+ Projects</small>
            <br></br>
            <VscNewFolder className="about__icon" />
          </article>
        </div>
        <br></br>
        <div>
          <a href="#contact" className="callBtn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
