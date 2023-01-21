import React from "react";
import Header from "../components/Header/Header";
import TextContentCenter from "../components/Skills/TextContentCenter";
import Footer from "../components/Footer/Footer";
// import CardProjetcs from "../components/Projects/CardProjetcs";
import "../styles/Projects/Projects.css";

function Projects() {
  return (
    <>
      <Header />
      <TextContentCenter title="Portfolio de Projetos" />
      <div className="container-portf">
        <h2 className="title">Projetos</h2>
        <div className="filter-container">
          <ul>
            <li>
              <button>All</button>
            </li>
            <li>
              <button>UX/UI</button>
            </li>
            <li>
              <button>Web App</button>
            </li>
            <li>
              <button>Mobile App</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="projects-container">
        {/* <CardProjetcs />
        <CardProjetcs />
        <CardProjetcs /> */}
      </div>
      <Footer />
    </>
  );
}

export default Projects;
