import React from "react";
import "./header.css";

import ME from "../../assets/me.png";

import CV from "../../assets/cv.pdf";
import { FiLinkedin } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className="me">
        <img src={ME} alt="me" className="mee" />
      </div>
      <header>
        <div className="container header__container">
          <div className="intro">
            <h5>Hello, I'm </h5>
            <h1>Cornelius Samuel</h1>
            <h5 className="text-light">FullStack Developer</h5>
            <div className="cta">
              <a href={CV} className="btn">
                View CV
              </a>
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
          <div className="header__socials">
            <a href="https://linkedin.com" className="a1" target="_blank">
              <FiLinkedin />
            </a>
            <a href="https://github.com" className="a1" target="_blank">
              <BsGithub />
            </a>
            <a href="https://twitter.com" className="a1" target="_blank">
              <FiTwitter />
            </a>
          </div>

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
