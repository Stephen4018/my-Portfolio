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
              text="2+ years Working"
            />
            <About_card icon={<FiUsers />} 
            id="Clients" 
            text="20+ clients" 
            />
            <About_card
              icon={<BsFillFolderFill />}
              id="Projects"
              text="20+ projects"
            />
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quia assumenda quaerat cum fugit sint, officiis provident animi
            consequuntur sed numquam perferendis possimus asperiores
            reprehenderit a deleniti? Recusandae, enim nulla?
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
