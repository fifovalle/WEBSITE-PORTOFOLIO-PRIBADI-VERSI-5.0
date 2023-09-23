// FILE REACT
import React, { useEffect as gunakanEfek } from "react";
import { useInView as gunakanSaatDilihat } from "react-intersection-observer";
// FILE FRAMER-MOTION
import { useAnimation as gunakanAnimasi } from "framer-motion";
// FILE SAYA
import { KumpulanKeahlian } from "../data/konstanta";
import {
  Wadah,
  Pembungkus,
  Judul,
  Deskripsi,
  WadahKeahlian,
  KeahlianKeahlian,
  JudulKeahlian,
  DaftarKeahlian,
  KeahlianSaya,
  GambarKeahlian,
} from "../styles/Keahlian.styled";
import { Muncul } from "../utils/AnimasiHalaman";

const Keahlian = () => {
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
    <section id="keahlian">
      <Wadah>
        <Pembungkus>
          <Judul
            variants={Muncul("bawah", 0.3)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.7 }}
          >
            KEAHLIAN SAYA
          </Judul>
          <Deskripsi
            variants={Muncul("bawah", 0.6)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.7 }}
          >
            Kumpulan Keahlian Saya
          </Deskripsi>
          <WadahKeahlian
            ref={referensi}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={kontrol}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            {KumpulanKeahlian.map((keahlian) => (
              <KeahlianKeahlian key={keahlian.id}>
                <JudulKeahlian>{keahlian.judul}</JudulKeahlian>
                <DaftarKeahlian>
                  {keahlian.keahlian.map((keahlian) => (
                    <KeahlianSaya key={keahlian.id}>
                      <GambarKeahlian src={keahlian.gambar} />
                      {keahlian.nama}
                    </KeahlianSaya>
                  ))}
                </DaftarKeahlian>
              </KeahlianKeahlian>
            ))}
          </WadahKeahlian>
        </Pembungkus>
      </Wadah>
    </section>
  );
};

export default Keahlian;
