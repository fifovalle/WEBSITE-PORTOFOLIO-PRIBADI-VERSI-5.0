// FILE REACT
import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode as ModeKetat } from "react";
// FILE SAYA
import Aplikasi from "./Aplikasi";

const akar = ReactDOM.createRoot(document.getElementById("akar"));
akar.render(
  <ModeKetat>
    <Aplikasi />
  </ModeKetat>
);
