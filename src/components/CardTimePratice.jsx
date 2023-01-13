import React from "react";
// Card do tempo de experiência na linguagem
export default function CardTimePratice({
  nameLanguage,
  timePratice,
  description,
}) {
  return (
    <>
      <div className="container-timeCard">
        <h2>{nameLanguage}</h2>
        <p>{timePratice}</p>
        <div className="container-text-timeCard">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
