import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="navbar__logo">
              <img src={require("../assets/Logo.png")} alt="logo" />
            </div>

            <div className="navbar__links">
              <p className="burguer"></p>
              <ul>
                <li className="undeline">
                  <a href="#" class="">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">Skills</a>
                </li>
                <li>
                  <a href="#">Portfólio</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>

                <li>
                  <div className="toglle">
                    <input type="checkbox" id="switch" />
                    <label for="switch">Toggle</label>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
