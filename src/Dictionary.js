import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState("");
  function search(event) {
    event.preventDefault();
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
