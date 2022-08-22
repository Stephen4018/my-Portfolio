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
          <h4>Envo project</h4>
          <span>
            <a href="https://github.com/Stephen4018/envo" className="btn">
              Github
            </a>
            <a href="https://envo-stephen4018.vercel.app" className="btn btn-primary">
              Live Demo
            </a>
          </span>
        </article>

        <article>
          <div className="project__image">
            <img src="images/ppk.png" alt="" />
          </div>
          <h4>Pleasure Park discount App</h4>
          <span>
            <a href="https://github.com/Stephen4018/Pleasure-Park-Discoun-App" className="btn">
              Github
            </a>
            <a href="pleasure-park-discount-app-782a16.netlify.app" className="btn btn-primary">
              Live Demo
            </a>
          </span>
        </article>

        <article>
          <div className="project__image">
            <img src="images/yezzy.png" alt="" />
          </div>
          <h4>Ecommerce Website</h4>
          <span>
            <a href="https://github.com/Stephen4018/Yeezy-Footies-Ecommerce" className="btn">
              Github
            </a>
            <a href="yeezy-footies-ecommerce-c1dea4.netlify.app" className="btn btn-primary">
              Live Demo
            </a>
          </span>
        </article>
{/* 
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
        </article> */}
      </div>
    </section>
  );
}

export default Portfolio;
