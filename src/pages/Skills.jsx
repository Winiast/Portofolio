import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TextContentCenter from "../components/TextContentCenter";
import DescriptionSkills from "../components/DescriptionSkills";
import CardTimePratice from "../components/CardTimePratice";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <>
      <Header />
      <div className="container-body-skills">
        <TextContentCenter title="Front-end Skills" />
      </div>

      <div className="content-exp">
        <div className="container-exp-description">
          <DescriptionSkills
            title="UX/UI Design"
            icon="BsPencil"
            description="Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou"
          />
          <DescriptionSkills
            title="UX/UI Design"
            icon="BsPencil"
            description="Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou"
          />
          <DescriptionSkills
            title="UX/UI Design"
            icon="BsPencil"
            description="Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou"
          />
        </div>

        <div className="container-exp-timeCard">
          <CardTimePratice
            nameLanguage="JavaScript"
            timePratice="1 Ano"
            description="Trabalhei com Javascript em alguns projetos dentro da SIP Digital"
          />
          <CardTimePratice
            nameLanguage="JavaScript"
            timePratice="1 Ano"
            description="Trabalhei com Javascript em alguns projetos dentro da SIP Digital"
          />
          <CardTimePratice
            nameLanguage="JavaScript"
            timePratice="1 Ano"
            description="Trabalhei com Javascript em alguns projetos dentro da SIP Digital"
          />
          <CardTimePratice
            nameLanguage="JavaScript"
            timePratice="1 Ano"
            description="Trabalhei com Javascript em alguns projetos dentro da SIP Digital"
          />
          <CardTimePratice
            nameLanguage="JavaScript"
            timePratice="1 Ano"
            description="Trabalhei com Javascript em alguns projetos dentro da SIP Digital"
          />
          <CardTimePratice
            nameLanguage="JavaScript"
            timePratice="1 Ano"
            description="Trabalhei com Javascript em alguns projetos dentro da SIP Digital"
          />
          <CardTimePratice
            nameLanguage="JavaScript"
            timePratice="1 Ano"
            description="Trabalhei com Javascript em alguns projetos dentro da SIP Digital"
          />
          <CardTimePratice
            nameLanguage="JavaScript"
            timePratice="1 Ano"
            description="Trabalhei com Javascript em alguns projetos dentro da SIP Digital"
          />
          <CardTimePratice
            nameLanguage="JavaScript"
            timePratice="1 Ano"
            description="Trabalhei com Javascript em alguns projetos dentro da SIP Digital"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
