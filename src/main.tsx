import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./locales/i18n";

const container = document.getElementById("root") as Element | DocumentFragment;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
