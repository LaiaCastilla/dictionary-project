import React from "react";
import Meanings from "./Meanings";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <div className="word-phon">
            <span className="word">{props.results.word} </span>
            <span className="phonetics">/{props.results.phonetic}/</span>
          </div>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section>
              <div key={index}>
                <Meanings meanings={meaning} />
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
