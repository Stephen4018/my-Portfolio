import React from "react";
import "./about.scss";
import About_card from "./About_card";
import { FaAward } from "react-icons/fa";
import { BsFillFolderFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

function About() {
  return (
    <section id="about">
      <h6>Get To Know</h6>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="images/stephen3.jpeg"
              className="about__me-image"
              alt="this pics"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <About_card
              icon={<FaAward />}
              id="Experience"
              text="1+ years Working"
            />
            <About_card icon={<FiUsers />} 
            id="Clients" 
            text="10+ clients" 
            />
            <About_card
              icon={<BsFillFolderFill />}
              id="Projects"
              text="20+ projects"
            />
          </div>

          <p>
          Front-End Developer who was formely a petroleum Engineer, i became enthusiastic about Tech as at November 2021. i loved to design and create beautiful stuff on the web so i found myself in Frontend space starting out with HTML, CSS, JAVASCRIPT and REACT, these stacks has helped me to build awesome UserInterfaces. My story will not end here as i am looking to pick up new languages to add to my stacks.
          </p>

          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
 