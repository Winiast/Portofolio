import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/About.css";

export default function About() {
  return (
    <div className="container-home">
      <Header />
      <section>
        <div className="container-about">
          <div className="content-about">
            <div className="about-image">
              <img src={require("../assets/Foto.png")} alt="Foto de perfil" />
            </div>

            <div className="about-content">
              <p className="position">FullStack Developer</p>
              <h1 className="name">Gustavo Silva</h1>
              <p className="text-about">
                Me chamo Gustavo Henrique e tenho 21 anos, sou desenvolvedor
                full-stack, aqui desejo apresentar a você um pouco do meu
                trabalho e de quem eu sou, tudo feito dentro deste portfólio até
                ele mesmo foram trabalhos meus alguns como projetos pessoais
                outros como participações em equipes, espero que goste do que
                irá ver.
              </p>
              <div className="social-media">
                <button className="btn-cv">CV</button>
                <span></span>
                <button className="btn-contato">Contato</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
