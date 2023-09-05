import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState("");
  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = `fdt0a6ab6o2733f48fa51ccaa0c76a01`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchWord}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    alert(`Searching for ${searchWord}`);
  }
  function handleSearchWord(event) {
    setSearchWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search} className="input-group mb-3">
        <input
          type="search"
          class="form-control"
          autoFocus="true"
          autoComplete="on"
          placeholder="What word do you want to look up?"
          onChange={handleSearchWord}
        />
        <div class="input-group-text search-btn" onClick={search}>
          🔍
        </div>
      </form>
    </div>
  );
}
