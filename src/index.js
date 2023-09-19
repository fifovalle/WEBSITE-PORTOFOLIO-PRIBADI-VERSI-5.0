// FILE REACT
import React from "react";
import ReactDOM from "react-dom/client";
// FILE SAYA
import Aplikasi from "./Aplikasi";

const akar = ReactDOM.createRoot(document.getElementById("akar"));
akar.render(
  <React.StrictMode>
    <Aplikasi />
  </React.StrictMode>
);
