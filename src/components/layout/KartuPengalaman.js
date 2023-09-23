// FILE REACT
import React from "react";
// FILE SAYA
import {
  Kartu,
  Atas,
  Logo,
  Konten,
  Peran,
  Perusahaan,
  Waktu,
  Deskripsi,
  KeahlianSaya,
  Daftar,
  DaftarKeahlian,
  Dokumen,
} from "../../styles/KartuPengalaman.styled";

const KartuPengalaman = ({ pengalaman }) => {
  return (
    <Kartu key={pengalaman.id}>
      <Atas key={pengalaman.id}>
        <Logo
          key={pengalaman.id}
          src={pengalaman.gambar}
          alt={pengalaman.peran}
        />
        <Konten>
          <Peran>{pengalaman.peran}</Peran>
          <Perusahaan>{pengalaman.perusahaan}</Perusahaan>
          <Waktu>{pengalaman.tanggal}</Waktu>
        </Konten>
      </Atas>
      <Deskripsi>
        {pengalaman.deskripsi}
        {pengalaman?.keahlian && (
          <>
            <br />
            <KeahlianSaya key={pengalaman.id}>
              <b>Keahlian:</b>
              <Daftar>
                {pengalaman.keahlian.map((keahlian) => (
                  <DaftarKeahlian key={keahlian.id}>{keahlian}</DaftarKeahlian>
                ))}
              </Daftar>
            </KeahlianSaya>
          </>
        )}
      </Deskripsi>
      {pengalaman.dokumen && (
        <Dokumen src={pengalaman.dokumen} key={pengalaman.id} />
      )}
    </Kartu>
  );
};

export default KartuPengalaman;
