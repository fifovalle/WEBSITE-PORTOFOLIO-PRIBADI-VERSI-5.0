// FILE REACT
import { BrowserRouter as Jalur } from "react-router-dom";
// FILE STYLED COMPONENTS
import { ThemeProvider as PenyediaTema } from "styled-components";
// FILE SAYA
import "./Aplikasi.css";
import { temaGelap } from "./utils/Tema";
import { Badan, Pembungkus } from "./styles/Aplikasi.styled";
import NavigasiBar from "./components/NavigasiBar";
import Tentang from "./components/Tentang";
import Keahlian from "./components/Keahlian";
import Pengalaman from "./components/Pengalaman";
import Proyek from "./components/Proyek";
import Edukasi from "./components/Edukasi";
import Kontak from "./components/Kontak";
import Penutup from "./components/Penutup";

function Aplikasi() {
  return (
    <PenyediaTema theme={temaGelap}>
      <Jalur>
        <NavigasiBar />
        <Badan>
          <Tentang />
        </Badan>
        <Pembungkus>
          <Keahlian />
          <Pengalaman />
        </Pembungkus>
        <Proyek />
        <Pembungkus>
          <Edukasi />
          <Kontak />
        </Pembungkus>
        <Penutup />
      </Jalur>
    </PenyediaTema>
  );
}

export default Aplikasi;
