// FILE REACT
import { BrowserRouter as Jalur } from "react-router-dom";
import { useState as gunakanKendali, useEffect as gunakanEfek } from "react";
import { MoonLoader } from "react-spinners";
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
    const timeoutId = setTimeout(() => {
      aturApakahMemuat(false);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <PenyediaTema theme={temaGelap}>
      {apakahMemuat ? (
        <WadahMemuat>
          <MoonLoader color="#FF56F6" size={100} loading={apakahMemuat} />
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
