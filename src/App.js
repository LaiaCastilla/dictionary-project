import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <a href="/">Dictionary</a>
          </h1>
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
          code by{" "}
          <a
            href="https://laiafrontend.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Laia
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
