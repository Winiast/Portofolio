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
        <h2>Parte do Mapa</h2>
        <div className="container-info">
          <DescriptionSkills title="Endereço" description="Rua dos Bobos, 0" />
          <DescriptionSkills title="Telefone" description="(11) 11111-1111" />
          <DescriptionSkills title="E-mail" description="gustavo.winiast" />
        </div>

        <div className="container-form">
          <h2>Contate-me!</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" />
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
              <label htmlFor="telefone" id="telefone"></label>
              <input type="text" id="telefone" />
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" rows="5"></textarea>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
