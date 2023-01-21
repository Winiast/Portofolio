import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextContentCenter from "../components/TextContentCenter";
import DescriptionSkills from "../components/DescriptionSkills";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <Header />
      <TextContentCenter title="Contato" />
      <div className="container-contact">
        <div className="container-info">
          <DescriptionSkills
            title="Endereço"
            description="Rua dos Bobos, 0"
            icon="BsPencil"
          />
          <DescriptionSkills
            title="Telefone"
            description="(41) 99667-2322"
            icon="BsPencil"
          />
          <DescriptionSkills
            title="E-mail"
            description="gustavo.winiast"
            icon="BsPencil"
          />
        </div>

        <div className="container-form">
          <h2>Contate-me!</h2>
          <form>
            <div className="form-group">
              <div className="form-left">
                <label htmlFor="name">
                  Nome
                  <input type="text" id="name" />
                </label>
                <label htmlFor="email">
                  E-mail
                  <input type="email" id="email" />
                </label>
                <label htmlFor="telefone" id="telefone">
                  Telefone
                  <input type="text" id="telefone" />
                </label>
              </div>
              <div className="assunto">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" rows="5"></textarea>
                <button type="submit">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
