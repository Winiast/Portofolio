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
            <h2 className="title-exp-timeCard">Experiência</h2>
            <div className="into-container-card">
              <CardTimePratice
                nameLanguage="ReactJs"
                timePratice="1 Ano"
                icon="FaReact"
                description="Trabalhei com ReactJs em alguns projetos dentro da SIP Digital"
                cor="#10ADED"
              />
              <CardTimePratice
                nameLanguage="HTML5"
                timePratice="1 Ano"
                icon="ImHtmlFive"
                cor="#F47109"
                description="Trabalhei com Javascript em alguns projetos dentro da SIP Digital"
              />
              <CardTimePratice
                nameLanguage="JavaScript"
                timePratice="1 Ano"
                cor="yellow"
                icon="SiJavascript"
                description="Trabalhei com Javascript em alguns projetos dentro da SIP Digital"
              />
              <CardTimePratice
                nameLanguage="TypeScript"
                timePratice="1 Ano"
                icon="SiTypescript"
                cor="#045289"
                description="Trabalhei com Javascript em alguns projetos dentro da SIP Digital"
              />
            </div>
          </div>
        </div>
        <TextContentCenter title="Back-end Skills" />

        <div className="content-exp">
          <div className="container-exp-timeCard">
            <h2 className="title-exp-timeCard">Experiência</h2>
            <div className="into-container-card">
              <CardTimePratice
                nameLanguage="ReactJs"
                timePratice="1 Ano"
                icon="FaReact"
                description="Trabalhei com ReactJs em alguns projetos dentro da SIP Digital"
                cor="#10ADED"
              />
              <CardTimePratice
                nameLanguage="HTML5"
                timePratice="1 Ano"
                icon="ImHtmlFive"
                cor="#F47109"
                description="Trabalhei com Javascript em alguns projetos dentro da SIP Digital"
              />
              <CardTimePratice
                nameLanguage="JavaScript"
                timePratice="1 Ano"
                cor="yellow"
                icon="SiJavascript"
                description="Trabalhei com Javascript em alguns projetos dentro da SIP Digital"
              />
              <CardTimePratice
                nameLanguage="TypeScript"
                timePratice="1 Ano"
                icon="SiTypescript"
                cor="#045289"
                description="Trabalhei com Javascript em alguns projetos dentro da SIP Digital"
              />
            </div>
          </div>

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
        </div>
      </div>
      <Footer />
    </>
  );
}
