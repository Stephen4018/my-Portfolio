import React from "react";
import "./portfolio.scss";

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>My Projects</h2>

       
      <div className="container project__container">

        <article>
          <div className="project__image">
            <img src="images/envo.png" alt="" />
          </div>
          <h4>this is repl project</h4>
          <span>
            <a href="https//:github.com" className="btn">
              Github
            </a>
            <a href="https//:github.com" className="btn btn-primary">
              Live Demo
            </a>
          </span>
        </article>

        <article>
          <div className="project__image">
            <img src="images/project.png" alt="" />
          </div>
          <h4>this is repl project</h4>
          <span>
            <a href="https//:github.com" className="btn">
              Github
            </a>
            <a href="https//:github.com" className="btn btn-primary">
              Live Demo
            </a>
          </span>
        </article>

        <article>
          <div className="project__image">
            <img src="images/project.png" alt="" />
          </div>
          <h4>this is repl project</h4>
          <span>
            <a href="https//:github.com" className="btn">
              Github
            </a>
            <a href="https//:github.com" className="btn btn-primary">
              Live Demo
            </a>
          </span>
        </article>

        <article>
          <div className="project__image">
            <img src="images/project.png" alt="" />
          </div>
          <h4>this is repl project</h4>
          <span>
            <a href="https//:github.com" className="btn">
              Github
            </a>
            <a href="https//:github.com" className="btn btn-primary">
              Live Demo
            </a>
          </span>
        </article>

        <article>
          <div className="project__image">
            <img src="images/project.png" alt="" />
          </div>
          <h4>this is repl project</h4>
          <span>
            <a href="https//:github.com" className="btn">
              Github
            </a>
            <a href="https//:github.com" className="btn btn-primary">
              Live Demo
            </a>
          </span>
        </article>

        <article>
          <div className="project__image">
            <img src="images/project.png" alt="" />
          </div>
          <h4>this is repl project</h4>
          <span>
            <a href="https//:github.com" className="btn">
              Github
            </a>
            <a href="https//:github.com" className="btn btn-primary">
              Live Demo
            </a>
          </span>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
