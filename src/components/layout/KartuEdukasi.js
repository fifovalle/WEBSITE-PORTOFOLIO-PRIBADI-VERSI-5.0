// FILE REACT
import React from "react";
// FILE SAYA
import {
  Kartu,
  Atas,
  Gambar,
  Konten,
  Nama,
  Jurusan,
  Lama,
  Nilai,
  Deskripsi,
  Bungkus,
} from "../../styles/KartuEdukasi.styled";

const KartuEdukasi = ({ edukasi }) => {
  return (
    <Kartu>
      <Atas>
        <Gambar src={edukasi.gambar} alt={edukasi.sekolah} />
        <Konten>
          <Nama>{edukasi.sekolah}</Nama>
          <Jurusan>{edukasi.jurusan}</Jurusan>
          <Lama>{edukasi.lama}</Lama>
        </Konten>
      </Atas>
      <Nilai>
        <b>Nilai:</b> {edukasi.nilai}
      </Nilai>
      <Deskripsi>
        <Bungkus>{edukasi.deskripsi}</Bungkus>
      </Deskripsi>
    </Kartu>
  );
};

export default KartuEdukasi;
