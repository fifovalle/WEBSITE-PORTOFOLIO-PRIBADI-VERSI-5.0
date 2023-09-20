// FILE REACT
import { BrowserRouter as Jalur } from "react-router-dom";
// FILE STYLED COMPONENTS
import { ThemeProvider as PenyediaTema } from "styled-components";
// FILE SAYA
import "./Aplikasi.css";
import { temaGelap } from "./utils/Tema";
import { Badan, Pembungkus } from "./styles/Aplikasi.styled";
import NavigasiBar from "./components/NavigasiBar";

function Aplikasi() {
  return (
    <PenyediaTema theme={temaGelap}>
      <Jalur>
        <NavigasiBar />
        <Badan></Badan>
        <Pembungkus></Pembungkus>
      </Jalur>
    </PenyediaTema>
  );
}

export default Aplikasi;
