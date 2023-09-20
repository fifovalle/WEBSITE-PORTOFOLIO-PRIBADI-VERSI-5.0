// FILE REACT
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
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
  DartarMenuHp,
  DaftarTautanMenuHp,
} from "../styles/NavigasiBar.styled";
import { TautanNavigasi } from "../data/konstanta";
import Logo from "../assets/Logo.png";

const NavigasiBar = () => {
  const [buka, aturBuka] = useState(false);
  const githubURL = "https://github.com/fifovalle";
  const bukaGithub = () => {
    window.open(githubURL, "_blank");
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
            <Bungkus>aufal FIFA</Bungkus>
          </a>
        </LogoNavigasi>
        <IkonHP>
          <FaBars onClick={beralihMenjadiBuka} />
        </IkonHP>
        <MenuNavigasi>
          {TautanNavigasi.map((daftar) => (
            <Tautan key={daftar.id} href={daftar.tautan}>
              {daftar.nama}
            </Tautan>
          ))}
        </MenuNavigasi>
        <WadahTombol>
          <TombolGithub onClick={bukaGithub}>Profil Github</TombolGithub>
        </WadahTombol>
      </WadahNavigasi>
      {buka && (
        <DartarMenuHp buka={buka}>
          {TautanNavigasi.map((daftar) => (
            <DaftarTautanMenuHp
              key={daftar.id}
              href={daftar.tautan}
              onClick={() => {
                beralihMenjadiBuka();
              }}
            >
              {daftar.nama}
            </DaftarTautanMenuHp>
          ))}
          <TombolGithub
            style={{
              padding: "10px 16px",
              color: "white",
              width: "max-content",
            }}
            onClick={bukaGithub}
          >
            Profil Github
          </TombolGithub>
        </DartarMenuHp>
      )}
    </Navigasi>
  );
};

export default NavigasiBar;
