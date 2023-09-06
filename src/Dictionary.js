import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState("");
  let [dictionaryResponse, setDictionaryResponse] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setDictionaryResponse(response.data);
    console.log(response.data.meanings[0].definition);
  }

  function handleImages(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = `fdt0a6ab6o2733f48fa51ccaa0c76a01`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchWord}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    let imgApiKey = `fdt0a6ab6o2733f48fa51ccaa0c76a01`;
    let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${searchWord}&key=${imgApiKey}`;
    axios
      .get(imgApiUrl, { headers: { Authorization: `Bearer ${imgApiKey}` } })
      .then(handleImages);
  }
  function handleSearchWord(event) {
    setSearchWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="input-group">
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
      <Results results={dictionaryResponse} />
      <Photos photos={photos} />
    </div>
  );
}
