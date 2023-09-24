// FILE REACT
import React, {
  useRef as gunakanReferensi,
  useState as gunakanKendali,
} from "react";
// FILE MUI
import { Snackbar as Bar } from "@mui/material";
// FILE EMAILJS
import emailjs from "@emailjs/browser";
// FILE SAYA
import {
  Wadah,
  Pembungkus,
  Judul,
  Deskripsi,
  Formulir,
  JudulFormulir,
  Masukan,
  MasukanPesan,
  Tombol,
} from "../styles/Kontak.styled";
import { Muncul } from "../utils/AnimasiHalaman";

const Kontak = () => {
  const [buka, aturBuka] = gunakanKendali(false);
  const formulir = gunakanReferensi();

  const kendalikanFormulir = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tox7kqs",
        "template_nv7k7mj",
        formulir.current,
        "SybVGsYS52j2TfLbi"
      )
      .then(
        (result) => {
          aturBuka(true);
          formulir.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="kontak">
      <Wadah>
        <Pembungkus>
          <Judul
            variants={Muncul("atas", 0.3)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.7 }}
          >
            KONTAK SAYA
          </Judul>
          <Deskripsi
            variants={Muncul("atas", 0.6)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.7 }}
          >
            Teratarik Untuk Bekerja Sama?
          </Deskripsi>
          <Formulir
            ref={formulir}
            onSubmit={kendalikanFormulir}
            variants={Muncul("bawah", 1.3)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <JudulFormulir>Hubungi Saya 🚀</JudulFormulir>
            <Masukan placeholder="Masukan Email Anda" name="email" />
            <Masukan placeholder="Masukan Nama Anda" name="nama" />
            <Masukan placeholder="Masukan Subjek Anda" name="subjek" />
            <MasukanPesan
              placeholder="Masukan Pesan Anda"
              rows="4"
              name="pesan"
            />
            <Tombol type="submit" value="Kirim" />
          </Formulir>
          <Bar
            open={buka}
            autoHideDuration={6000}
            onClose={() => aturBuka(false)}
            message="Pesan Anda Berhasil Dikirim!"
            severity="success"
          />
        </Pembungkus>
      </Wadah>
    </section>
  );
};

export default Kontak;
