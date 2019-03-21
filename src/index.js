import React from "react";
// import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
  serviceWorker.unregister();
} else {
  render(<App />, rootElement);
}

// ReactDOM.render(<App />, document.getElementById("root"));
