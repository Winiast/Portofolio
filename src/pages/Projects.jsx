import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextContentCenter from "../components/TextContentCenter";
import CardProjetcs from "../components/CardProjects";
import "../styles/Projects.css";

export default function Projects() {
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
        <CardProjetcs />
        <CardProjetcs />
        <CardProjetcs />
      </div>
      <Footer />
    </>
  );
}
