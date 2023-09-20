// FILE REACT
import React from "react";
// FILE SAYA
import {
  Navigasi,
  WadahNavigasi,
  LogoNavigasi,
  IkonHP,
  MenuNavigasi,
  Tautan,
  WadahTombol,
  TombolGithub,
  Bungkus,
} from "../styles/NavigasiBar.styled";
import Logo from "../assets/Logo.png";

const NavigasiBar = () => {
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
            <img src={Logo} alt="" width={"100px"} />
            <Bungkus>aufal FIFA</Bungkus>
          </a>
        </LogoNavigasi>
        <IkonHP></IkonHP>
        <MenuNavigasi>
          <Tautan href="#tentang">Tentang</Tautan>
          <Tautan href="#kealian">Kealian</Tautan>
          <Tautan href="#pengalaman">Pengalaman</Tautan>
          <Tautan href="#proyek">Proyek</Tautan>
          <Tautan href="#edukasi">Edukasi</Tautan>
        </MenuNavigasi>
        <WadahTombol>
          <TombolGithub>Github Saya</TombolGithub>
        </WadahTombol>
      </WadahNavigasi>
    </Navigasi>
  );
};

export default NavigasiBar;
