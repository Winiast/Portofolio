import React from "react";
import "../styles/Header.css";
import { FaEnvira } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="navbar__logo">
              <FaEnvira />
            </div>

            <div className="navbar__links">
              <p className="burguer"></p>
              <ul>
                <li>
                  <a href="#" class="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Project</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
