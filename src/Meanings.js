import React from "react";

export default function Meanings(props) {
  console.log(props);
  return (
    <div className="Meanings">
      <h3 className="part-of-speech">{props.meanings.partOfSpeech}</h3>
      <p className="definition">Definition: {props.meanings.definition}</p>

      {/* <p className="example">
        <em>
          {props.meanings.example.charAt(0).toUpperCase() +
            props.meanings.example.slice(1)}
        </em>
      </p> */}
    </div>
  );
}
