import { React, useState } from "react";
import { FcDatabase } from "react-icons/fc";
import "../../styles/Header/Header.css";

export default function Header() {
  const [themeDark, setThemeDark] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="navbar__logo">
              <img src={require("../../assets/Logo.png")} alt="logo" />
            </div>

            <div className="navbar__links">
              <FcDatabase fontSize={40} className="menu-resp" />
              <ul>
                <li className="undeline">
                  <a href="/#" className="">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="/skills">Habilidades</a>
                </li>
                <li>
                  <a href="/projects">Portfólio</a>
                </li>
                <li>
                  <a href="/contact">Contato</a>
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
