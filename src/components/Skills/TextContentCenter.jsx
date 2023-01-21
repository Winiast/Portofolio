import React from "react";
import "../../styles/Skills/TextContentCenter.css";

export default function TextContentCenter({ title }) {
  return (
    <>
      <div className="container-textContent">
        <h1>{title}</h1>
      </div>
    </>
  );
}
