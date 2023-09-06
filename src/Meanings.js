import React from "react";

export default function Meanings(props) {
  console.log(props);
  return (
    <div className="Meanings">
      <h3 className="part-of-speech">{props.meanings.partOfSpeech}</h3>
      <p className="definition">Definition: {props.meanings.definition}</p>
      <p className="example">
        <em>
          {props.meanings.example !== null
            ? `"${
                props.meanings.example.charAt(0).toUpperCase() +
                props.meanings.example.slice(1)
              }"`
            : null}
        </em>
      </p>
      <p className="synonyms">
        {props.meanings.synonyms !== null
          ? props.meanings.synonyms.map(function (synonym, index) {
              return (
                <span key={index}>
                  {index === 0 ? "" : ", "}
                  {synonym}
                </span>
              );
            })
          : null}
      </p>
    </div>
  );
}
