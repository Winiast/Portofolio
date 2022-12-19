import React from "react";
import "../styles/Content.css";
import { MdOutlineWavingHand } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";

export default function Content() {
  return (
    <>
      <section>
        <div className="container">
          <div className="content">
            <section className="About">
              <div className="about__text">
                <div className="card01">
                  <div className="icone">
                    <MdOutlineWavingHand color="white" font-size="50px" />
                  </div>
                  <h1>
                    Olá, Eu sou o <br></br>
                    <span>Gustavo Henrique</span>
                  </h1>
                </div>
                <div className="card02">
                  <ul>
                    <li>Desenvolvedor Front-End</li>
                    <li>Desenvolvedor Mobile</li>
                    <li>Designer UI/UX</li>
                  </ul>
                </div>
              </div>
              <div className="about__image">
                {/* <img src="" alt="" /> */}
                <img
                  src={require("../assets/Perfil.jpg")}
                  alt="Foto de Perfil"
                  className="perfil_image"
                />
              </div>
              <div className="about__atuation">
                <div className="icon01">
                  <FaReact color="#4cb08f" font-size="80px" />
                </div>
                <div className="icon02">
                  <SiTypescript color="#3a76fe" font-size="80px" />
                </div>
                <div className="icon03">
                  <SiJavascript color="#e3d84f" font-size="80px" />
                </div>
              </div>
            </section>

            <section className="Works">
              <div className="works__title">
                <h1>Works</h1>
              </div>
              <div className="works__content">
                <div className="works_content_listFilter">
                  <ul>
                    <li>
                      {/* <a href="#">All</a>
                      <a href="#">React Js</a>
                      <a href="#">React Native</a>
                      <a href="#">Web App</a>
                      <a href="#">Backend</a> */}
                    </li>
                  </ul>
                </div>
                <div className="works_content_list">
                  <ul>
                    <li>
                      <div className="works_content_list__image">
                        <img src="" alt="" />
                        <h3>Website Moderno</h3>
                        <p>Um website muito moderno feito por mim</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="Skills">
              <div className="skills__title">
                <h1>Skills</h1>
              </div>

              <div className="skills__content">
                <div className="skills_content__list">
                  <ul>
                    <li>
                      <div className="skills_content__list__image">
                        <img src="" alt="" />
                        <p>TypeScript</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="skills_content_experience">
                  <div className="skills_content_experience__title">
                    <h1>Experience</h1>
                    <p>Lugar</p>
                    <p>Tempo</p>
                    <h2>Ano</h2>
                  </div>
                </div>
              </div>
            </section>

            <section className="Contact"></section>
          </div>
        </div>
      </section>
    </>
  );
}
