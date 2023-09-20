// FILE REACT
import React, { useState as gunakanKendali } from "react";
import { FaBars } from "react-icons/fa";
// FILE SAYA
import {
  Navigasi,
  WadahNavigasi,
  LogoNavigasi,
  IkonUntukHP,
  MenuNavigasi,
  Tautan,
  WadahTombol,
  TombolGithub,
  Teks,
  DartarMenuUntukHp,
  DaftarTautanMenuUntukHp,
} from "../styles/NavigasiBar.styled";
import { TautanNavigasi } from "../data/konstanta";
import Logo from "../assets/Logo.png";

const NavigasiBar = () => {
  const [buka, aturBuka] = gunakanKendali(false);
  const urlGithub = "https://github.com/fifovalle";
  const bukaGithub = () => {
    window.open(urlGithub, "_blank");
  };
  const beralihMenjadiBuka = () => {
    aturBuka(!buka);
  };
  return (
    <Navigasi>
      <WadahNavigasi>
        <LogoNavigasi to="/">
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <img src={Logo} alt="logo" width={"100px"} />
            <Teks>aufal FIFA</Teks>
          </a>
        </LogoNavigasi>
        <IkonUntukHP>
          <FaBars onClick={beralihMenjadiBuka} />
        </IkonUntukHP>
        <MenuNavigasi>
          {TautanNavigasi.map((daftartautan) => (
            <Tautan key={daftartautan.id} href={daftartautan.tautan}>
              {daftartautan.nama}
            </Tautan>
          ))}
        </MenuNavigasi>
        <WadahTombol>
          <TombolGithub onClick={bukaGithub}>Github Saya</TombolGithub>
        </WadahTombol>
      </WadahNavigasi>
      {buka && (
        <DartarMenuUntukHp buka={buka}>
          {TautanNavigasi.map((daftartautan) => (
            <DaftarTautanMenuUntukHp
              key={daftartautan.id}
              href={daftartautan.tautan}
              onClick={() => {
                beralihMenjadiBuka();
              }}
            >
              {daftartautan.nama}
            </DaftarTautanMenuUntukHp>
          ))}
          <TombolGithub
            style={{
              padding: "10px 16px",
              color: "white",
              width: "max-content",
            }}
            onClick={bukaGithub}
          >
            Github Saya
          </TombolGithub>
        </DartarMenuUntukHp>
      )}
    </Navigasi>
  );
};

export default NavigasiBar;
