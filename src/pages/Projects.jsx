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
      <TextContentCenter title="Projetos" />
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
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
