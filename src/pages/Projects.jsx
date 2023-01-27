import React from "react";
import Header from "../components/Header/Header";
import TextContentCenter from "../components/Skills/TextContentCenter";
import Footer from "../components/Footer/Footer";
import Card from "../components/Projects/Card";
import "../styles/Projects/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <Header />
      <div className="container-portf">
        <TextContentCenter title="Projetos" />
        <div className="filter-container">
          <h2 className="title">Projetos</h2>
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
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
