import React from "react";
import { BsPencil } from "react-icons/bs";
import "../../styles/Skills/DescriptionSkills.css";
// Card da descricao da skills
export default function DescriptionSkills({ title, icon, description }) {
  let valueOfIcon = "";
  if (icon === "BsPencil") {
    valueOfIcon = <BsPencil />;
  }
  return (
    <>
      <div className="container-descript">
        <div className="icon-cont">{valueOfIcon}</div>
        <div className="descript-text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
