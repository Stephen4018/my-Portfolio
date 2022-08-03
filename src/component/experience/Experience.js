import React from "react";
import "./experience.scss";
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h6>What Skills i Have</h6>
      <h2>My Experience</h2>

      <div className="container my__experience">
        <div>
          <h3>Frontend Development</h3>

          <div className="experience__content">
            <article>
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h5 className="experience__language">HTML</h5>
                <small className="experience__level">Experienced</small>
              </div>
            </article>

            <article>
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h5 className="experience__language">CSS</h5>
                <small className="experience__level">Intermidiate</small>
              </div>
            </article>

            <article>
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h5 className="experience__language">JavaScript</h5>
                <small className="experience__level">Intermidiate</small>
              </div>
            </article>

            <article>
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h5 className="experience__language">Bootstrap</h5>
                <small className="experience__level">Intermidiate</small>
              </div>
            </article>

            <article>
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h5 className="experience__language">React</h5>
                <small className="experience__level">Intermidiate</small>
              </div>
            </article>

            <article>
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h5 className="experience__language">HTML</h5>
                <small className="experience__level">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div>
          <h3>Design Experience</h3>

          <div className="experience__content">
            <article>
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h5 className="experience__language">HTML</h5>
                <small className="experience__level">Experienced</small>
              </div>
            </article>

            <article>
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h5 className="experience__language">CSS</h5>
                <small className="experience__level">Intermidiate</small>
              </div>
            </article>

            <article>
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h5 className="experience__language">JavaScript</h5>
                <small className="experience__level">Intermidiate</small>
              </div>
            </article>

            <article>
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h5 className="experience__language">Bootstrap</h5>
                <small className="experience__level">Intermidiate</small>
              </div>
            </article>

            <article>
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h5 className="experience__language">React</h5>
                <small className="experience__level">Intermidiate</small>
              </div>
            </article>

            <article>
              <BsPatchCheckFill className="details__icon" />
              <div>
                <h5 className="experience__language">HTML</h5>
                <small className="experience__level">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
