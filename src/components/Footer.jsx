import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container-footer">
          <div className="social-footer">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/gustavo-henrique-silva-7b1b3b1b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>

              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </li>

              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="copy">
            <p>© 2020 - Gustavo Henrique Ferreira da Silva</p>
          </div>
        </div>
      </div>
    </>
  );
}
