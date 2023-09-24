// FILE REACT
import { useInView as gunakanSaatDilihat } from "react-intersection-observer";
import React, {
  useEffect as gunakanEfek,
  useState as gunakanWilayah,
} from "react";
// FILE FRAMER-MOTION
import { useAnimation as gunakanAnimasi } from "framer-motion";
// TYPE WRITER
import Typewriter from "typewriter-effect";
// FILE FRAMER-MOTION
import { AnimatePresence } from "framer-motion";
// FILE SAYA
import {
  WadahTentang,
  LatarTentang,
  IsiTentang,
  TentangBagianKiri,
  Judul,
  TeksBerulang,
  Bungkus,
  Deskripsi,
  TombolRingkasan,
  TentangBagianKanan,
  Foto,
  Partikel,
  Partikel2,
  Partikel3,
} from "../styles/Tentang.styled";
import { Biografi, Transisi } from "../data/konstanta";
import LatarAnimasi from "../utils/AnimasiLatar";
import gambarpartikel from "../assets/Partikel.png";
import { Muncul } from "../utils/AnimasiHalaman";

const Tentang = () => {
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
  const [indexBaru, setindexBaru] = gunakanWilayah(0);
  gunakanEfek(() => {
    const interval = setInterval(() => {
      setindexBaru((Lihat) => (Lihat + 1) % Biografi.foto.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="tentang">
      <WadahTentang>
        <LatarTentang
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1, ease: "easeInOut" }}
        >
          <LatarAnimasi />
        </LatarTentang>
        <IsiTentang>
          <TentangBagianKiri>
            <Judul
              variants={Muncul("atas", 0.3)}
              initial="hilang"
              whileInView={"ada"}
              viewport={{ once: false, amount: 0.7 }}
            >
              HALO, SAYA <br /> {Biografi.nama}
            </Judul>
            <TeksBerulang
              variants={Muncul("atas", 0.6)}
              initial="hilang"
              whileInView={"ada"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Saya Seorang{" "}
              <Bungkus>
                <Typewriter
                  options={{
                    strings: Biografi.peran,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Bungkus>
            </TeksBerulang>
            <Deskripsi
              variants={Muncul("atas", 0.8)}
              initial="hilang"
              whileInView={"ada"}
              viewport={{ once: false, amount: 0.7 }}
            >
              {Biografi.deskripsi}
            </Deskripsi>
            <TombolRingkasan
              ref={referensi}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={kontrol}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              Cek Ringkasan Singkat
            </TombolRingkasan>
          </TentangBagianKiri>
          <TentangBagianKanan
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <AnimatePresence mode="wait">
              <Foto
                key={indexBaru}
                src={Biografi.foto[indexBaru]}
                alt="Gambar Saya"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={Transisi}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </AnimatePresence>
            <Partikel
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{ duration: 20, repeat: Infinity }}
              src={gambarpartikel}
              alt="Partikel"
            />
            <Partikel2
              animate={{
                y: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.8, 1],
              }}
              transition={{ duration: 18, repeat: Infinity }}
              src={gambarpartikel}
              alt="Partikel"
            />
            <Partikel3
              animate={{
                x: [0, -100, 0],
                rotate: 360,
                scale: [1, 0.9, 1],
              }}
              transition={{ duration: 15, repeat: Infinity }}
              src={gambarpartikel}
              alt="Partikel"
            />
          </TentangBagianKanan>
        </IsiTentang>
      </WadahTentang>
    </section>
  );
};

export default Tentang;
