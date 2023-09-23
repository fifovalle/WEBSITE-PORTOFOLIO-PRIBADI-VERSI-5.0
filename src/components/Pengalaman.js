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
import KartuPengalaman from "./layout/KartuPengalaman";
import {
  Wadah,
  Pembungkus,
  Judul,
  Deskripsi,
  Waktu,
} from "../styles/Pengalaman.styled";
import { KumpulanPengalaman } from "../data/konstanta";
import { Muncul } from "../utils/AnimasiHalaman";

const Pengalaman = () => {
  return (
    <section id="pengalaman">
      <Wadah>
        <Pembungkus>
          <Judul
            variants={Muncul("atas", 0.3)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.7 }}
          >
            PENGALAMAN SAYA
          </Judul>
          <Deskripsi
            variants={Muncul("atas", 0.6)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.7 }}
          >
            Kumpulan Pengalaman Saya
          </Deskripsi>
          <Waktu
            variants={Muncul("bawah", 1.3)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Linimasa>
              {KumpulanPengalaman.map((pengalaman, index) => (
                <DaftarLinimasa key={pengalaman.id}>
                  <PemisahLinimasa>
                    <DotLinimasa variant="outlined" color="secondary" />
                    {index !== KumpulanPengalaman.length - 1 && (
                      <PenghubungLinimasa />
                    )}
                  </PemisahLinimasa>
                  <KontenLinimasa sx={{ py: "12px", px: 2 }}>
                    <KartuPengalaman pengalaman={pengalaman} />
                  </KontenLinimasa>
                </DaftarLinimasa>
              ))}
            </Linimasa>
          </Waktu>
        </Pembungkus>
      </Wadah>
    </section>
  );
};

export default Pengalaman;
