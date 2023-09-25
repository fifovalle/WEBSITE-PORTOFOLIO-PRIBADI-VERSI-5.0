// FILE REACT
import { BrowserRouter as Jalur } from "react-router-dom";
import { useState as gunakanKendali, useEffect as gunakanEfek } from "react";
import { PacmanLoader } from "react-spinners";
// FILE STYLED COMPONENTS
import { ThemeProvider as PenyediaTema } from "styled-components";
// FILE SAYA
import "./Aplikasi.css";
import { temaGelap } from "./utils/Tema";
import { Badan, Pembungkus, WadahMemuat } from "./styles/Aplikasi.styled";
import NavigasiBar from "./components/NavigasiBar";
import Tentang from "./components/Tentang";
import Keahlian from "./components/Keahlian";
import Pengalaman from "./components/Pengalaman";
import Proyek from "./components/Proyek";
import Edukasi from "./components/Edukasi";
import Kontak from "./components/Kontak";
import Penutup from "./components/Penutup";
import DetailProyek from "./components/DetailProyek";

function Aplikasi() {
  const [apakahMemuat, aturApakahMemuat] = gunakanKendali(true);
  const [bukaModal, aturBukaModal] = gunakanKendali({
    state: false,
    project: null,
  });
  gunakanEfek(() => {
    const kendalikanHalaman = () => {
      aturApakahMemuat(false);
    };
    window.addEventListener("load", kendalikanHalaman);
    return () => {
      window.removeEventListener("load", kendalikanHalaman);
    };
  }, []);

  return (
    <PenyediaTema theme={temaGelap}>
      {apakahMemuat ? (
        <WadahMemuat>
          <PacmanLoader color="#FF56F6" size={150} loading={apakahMemuat} />
        </WadahMemuat>
      ) : (
        <Jalur>
          <NavigasiBar />
          <Badan>
            <Tentang />
          </Badan>
          <Pembungkus>
            <Keahlian />
            <Pengalaman />
          </Pembungkus>
          <Proyek bukaModal={bukaModal} aturBukaModal={aturBukaModal} />
          <Pembungkus>
            <Edukasi />
            <Kontak />
          </Pembungkus>
          <Penutup />
          {bukaModal.state && (
            <DetailProyek bukaModal={bukaModal} aturBukaModal={aturBukaModal} />
          )}
        </Jalur>
      )}
    </PenyediaTema>
  );
}

export default Aplikasi;
