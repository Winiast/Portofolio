import { React, useState } from "react";
import { FcDatabase } from "react-icons/fc";
import "../styles/Header.css";

export default function Header() {
  const [themeDark, setThemeDark] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="navbar__logo">
              <img src={require("../assets/Logo.png")} alt="logo" />
            </div>

            <div className="navbar__links">
              <FcDatabase fontSize={40} className="menu-resp" />
              <ul>
                <li className="undeline">
                  <a href="#" className="">
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
                    <input
                      type="checkbox"
                      id="switch"
                      onClick={() => {
                        setThemeDark(!themeDark);
                        console.log(themeDark);
                      }}
                    />
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
