import React from "react";
import ReactDOM from "react-dom";

import "normalize.css";
import "./styles.scss";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="app">
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
