// FILE REACT
import { BrowserRouter as Jalur } from "react-router-dom";
// FILE STYLED COMPONENTS
import { ThemeProvider } from "styled-components";
// FILE SAYA
import "./Aplikasi.css";
import { temaGelap } from "./utils/Tema";
import { Badan, Pembungkus } from "./styles/Aplikasi.styled";
import NavigasiBar from "./components/NavigasiBar";

function Aplikasi() {
  return (
    <ThemeProvider theme={temaGelap}>
      <Jalur>
        <NavigasiBar />
        <Badan></Badan>
        <Pembungkus></Pembungkus>
      </Jalur>
    </ThemeProvider>
  );
}

export default Aplikasi;
