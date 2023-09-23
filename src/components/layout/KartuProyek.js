// FILE REACT
import React from "react";
// FILE SAYA
import {
  Kartu,
  Gambar,
  Peralatan,
  Alat,
  Selengkapnya,
  Judul,
  Tanggal,
  Deskripsi,
  Tim,
  Foto,
} from "../../styles/KartuProyek.styled";

const KartuProyek = ({ proyek }) => {
  return (
    <Kartu>
      <Gambar src={proyek.gambar} alt={proyek.judul} />
      <Peralatan>
        {proyek.peralatan.map((peralatan) => (
          <Alat key={peralatan}>{peralatan}</Alat>
        ))}
      </Peralatan>
      <Selengkapnya>
        <Judul href={proyek.github} target="_blank" rel="noopener noreferrer">
          {proyek.judul}
        </Judul>
        <Tanggal> {proyek.tanggal}</Tanggal>
        <Deskripsi>{proyek.deskripsi}</Deskripsi>
      </Selengkapnya>
      <Tim>
        {proyek.tim?.map((tim) => (
          <Foto src={tim.gambar} alt={tim.nama} />
        ))}
      </Tim>
    </Kartu>
  );
};

export default KartuProyek;
