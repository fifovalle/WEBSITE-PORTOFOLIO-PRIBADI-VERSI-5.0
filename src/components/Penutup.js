// FILE REACT
import React from "react";
// FILE MUI
import Instagram from "@mui/icons-material/Instagram";
import GitHub from "@mui/icons-material/GitHub";
// FILE SAYA
import { Biografi } from "../data/konstanta";
import {
  Wadah,
  Pembungkus,
  Logo,
  Navigasi,
  TautanTautanNavigasi,
  IkonSosialMedia,
  Ikon,
  HakCipta,
} from "../styles/Penutup.styled";
import { TautanNavigasi } from "../data/konstanta";

const Penutup = () => {
  return (
    <Wadah>
      <Pembungkus>
        <Logo>Naufal FIFA</Logo>
        <Navigasi>
          {TautanNavigasi.map((daftartautan) => (
            <TautanTautanNavigasi
              key={daftartautan.id}
              href={daftartautan.tautan}
            >
              {daftartautan.nama}
            </TautanTautanNavigasi>
          ))}
        </Navigasi>
        <IkonSosialMedia>
          <Ikon href={Biografi.github} target="display">
            <GitHub />
          </Ikon>
          <Ikon href={Biografi.instagram} target="display">
            <Instagram />
          </Ikon>
        </IkonSosialMedia>
        <HakCipta>&copy; 2023 Naufal FIFA. Seluruh Hak Cipta.</HakCipta>
      </Pembungkus>
    </Wadah>
  );
};

export default Penutup;
