import React, { useState as gunakanKendali } from "react";
import KartuProyek from "./layout/KartuProyek";
import {
  Wadah,
  Pembungkus,
  Judul,
  Deskripsi,
  KelompokTombol,
  TombolBeralih,
  Pembagi,
  WadahKartu,
} from "../styles/Proyek.styled";
import { TombolProyek, KumpulanProyek } from "../data/konstanta";
const Proyek = () => {
  const [kategoriTerpilih, aturKategoriTerpilih] = gunakanKendali("SEMUA");
  const kendalikanTombolBeralih = (namaKategori) => {
    aturKategoriTerpilih(namaKategori);
  };
  return (
    <section id="proyek">
      <Wadah>
        <Pembungkus>
          <Judul>PROYEK SAYA</Judul>
          <Deskripsi>Kumpulan Proyek Saya</Deskripsi>
          <KelompokTombol>
            {TombolProyek.map((proyek) => (
              <React.Fragment key={proyek.id}>
                <TombolBeralih
                  aktif={kategoriTerpilih === proyek.nama}
                  onClick={() => kendalikanTombolBeralih(proyek.nama)}
                >
                  {proyek.nama}
                </TombolBeralih>
                <Pembagi />
              </React.Fragment>
            ))}
          </KelompokTombol>
          <WadahKartu>
            {KumpulanProyek.filter(
              (proyek) =>
                kategoriTerpilih === "SEMUA" ||
                proyek.kategori === kategoriTerpilih
            ).map((proyek) => (
              <KartuProyek proyek={proyek} key={proyek.id} />
            ))}
          </WadahKartu>
        </Pembungkus>
      </Wadah>
    </section>
  );
};

export default Proyek;
