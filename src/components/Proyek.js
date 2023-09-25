// FILE REACT
import React, {
  useState as gunakanKendali,
  useEffect as gunakanEfek,
} from "react";
import { useInView as gunakanSaatDilihat } from "react-intersection-observer";
// FILE FRAMER-MOTION
import { useAnimation as gunakanAnimasi } from "framer-motion";
// FILE SAYA
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
import { Muncul } from "../utils/AnimasiHalaman";

const Proyek = ({ bukaModal, aturBukaModal }) => {
  const [kategoriTerpilih, aturKategoriTerpilih] = gunakanKendali("SEMUA");
  const kendalikanTombolBeralih = (namaKategori) => {
    aturKategoriTerpilih(namaKategori);
  };
  const kontrol = gunakanAnimasi();
  const [referensi, saatDilihat] = gunakanSaatDilihat();
  gunakanEfek(() => {
    const konfigurasiAnimasi = saatDilihat
      ? {
          opacity: 1,
          x: 0,
          y: 0,
        }
      : {
          opacity: 0,
          x: 0,
          y: 0,
        };
    kontrol.start(konfigurasiAnimasi);
  }, [kontrol, saatDilihat]);
  return (
    <section id="proyek">
      <Wadah>
        <Pembungkus>
          <Judul
            variants={Muncul("bawah", 0.3)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.7 }}
          >
            PROYEK SAYA
          </Judul>
          <Deskripsi
            variants={Muncul("bawah", 0.6)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.7 }}
          >
            Kumpulan Proyek Saya
          </Deskripsi>
          <KelompokTombol
            ref={referensi}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={kontrol}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
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
          <WadahKartu
            variants={Muncul("atas", 0.6)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.1 }}
          >
            {KumpulanProyek.filter(
              (proyek) =>
                kategoriTerpilih === "SEMUA" ||
                proyek.kategori === kategoriTerpilih
            ).map((proyek) => (
              <KartuProyek
                proyek={proyek}
                key={proyek.id}
                bukaModal={bukaModal}
                aturBukaModal={aturBukaModal}
              />
            ))}
          </WadahKartu>
        </Pembungkus>
      </Wadah>
    </section>
  );
};

export default Proyek;
