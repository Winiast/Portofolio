import React from "react";
import "../../styles/Skills/CardTimePratice.css";
import { FaReact, FaJsSquare, FaNodeJs, FaJava } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3, SiTypescript, SiJavascript } from "react-icons/si";

export default function CardTimePratice({
  nameLanguage,
  timePratice,
  icon,
  description,
  cor,
}) {
  let valueOfIconCard = "";
  if (icon === "FaReact") {
    valueOfIconCard = <FaReact />;
  } else if (icon === "ImHtmlFive") {
    valueOfIconCard = <ImHtmlFive />;
  } else if (icon === "SiCss3") {
    valueOfIconCard = <SiCss3 />;
  } else if (icon === "FaJsSquare") {
    valueOfIconCard = <FaJsSquare />;
  } else if (icon === "FaNodeJs") {
    valueOfIconCard = <FaNodeJs />;
  } else if (icon === "SiTypescript") {
    valueOfIconCard = <SiTypescript />;
  } else if (icon === "FaJava") {
    valueOfIconCard = <FaJava />;
  } else if (icon === "SiJavascript") {
    valueOfIconCard = <SiJavascript />;
  }
  return (
    <>
      <div className="container-timeCard">
        <h2>{nameLanguage}</h2>
        <icon className="container-icon-timeCard" style={{ color: cor }}>
          {valueOfIconCard}
        </icon>
        <p>{timePratice}</p>
        <div className="container-text-timeCard">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
