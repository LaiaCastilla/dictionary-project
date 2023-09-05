import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  //   console.log(props.results.word);
  if (props.results) {
    return (
      <div className="Results">
        <div className="word-phon">
          <span className="word">{props.results.word} </span>
          <span className="phonetics">/{props.results.phonetic}/</span>
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meanings={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
