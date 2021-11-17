import React from "react";
import logo from "./dictionary-logo.jpg";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://hungry-darwin-f817f6.netlify.app/"
            rel="noopener noreferrer"
          >
            {" "}
            Emilia Busso{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/EmiBusso/dictionary-project"
            target="_blanck"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://hungry-darwin-f817f6.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
