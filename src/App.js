import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <a
            href="https://github.com/Aylhenia/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open source
          </a>{" "}
          code by Laia
        </footer>
      </div>
    </div>
  );
}

export default App;
