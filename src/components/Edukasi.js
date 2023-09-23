// FILE REACT
import React from "react";
// FILE MUI
import Linimasa from "@mui/lab/Timeline";
import DaftarLinimasa from "@mui/lab/TimelineItem";
import PemisahLinimasa from "@mui/lab/TimelineSeparator";
import PenghubungLinimasa from "@mui/lab/TimelineConnector";
import KontenLinimasa from "@mui/lab/TimelineContent";
import DotLinimasa from "@mui/lab/TimelineDot";
// FILE SAYA
import KartuEdukasi from "./layout/KartuEdukasi";
import {
  Wadah,
  Pembungkus,
  Judul,
  Deskripsi,
  Waktu,
} from "../styles/Edukasi.styled";
import { KumpulanEdukasi } from "../data/konstanta";
import { Muncul } from "../utils/AnimasiHalaman";

const Edukasi = () => {
  return (
    <section id="edukasi">
      <Wadah>
        <Pembungkus>
          <Judul
            variants={Muncul("bawah", 0.3)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.7 }}
          >
            EDUKASI SAYA
          </Judul>
          <Deskripsi
            variants={Muncul("bawah", 0.6)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.7 }}
          >
            Kumpulan Edukasi Saya
          </Deskripsi>
          <Waktu
            variants={Muncul("atas", 1.3)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <Linimasa>
              {KumpulanEdukasi.map((edukasi, index) => (
                <DaftarLinimasa key={edukasi.id}>
                  <KontenLinimasa sx={{ py: "12px", px: 2 }}>
                    <KartuEdukasi edukasi={edukasi} />
                  </KontenLinimasa>
                  <PemisahLinimasa>
                    <DotLinimasa variant="outlined" color="secondary" />
                    {index !== KumpulanEdukasi.length - 1 && (
                      <PenghubungLinimasa />
                    )}
                  </PemisahLinimasa>
                </DaftarLinimasa>
              ))}
            </Linimasa>
          </Waktu>
        </Pembungkus>
      </Wadah>
    </section>
  );
};

export default Edukasi;
