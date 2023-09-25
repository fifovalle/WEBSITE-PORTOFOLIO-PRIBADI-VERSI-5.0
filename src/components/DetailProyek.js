// FILE REACT
import React from "react";
// FILE MUI
import { Modal } from "@mui/material";
import { CloseRounded, GitHub } from "@mui/icons-material";
// FILE SAYA
import {
  Wadah,
  Pembungkus,
  Judul,
  Tanggal,
  Deskripsi,
  Gambar,
  Label,
  Peralatan,
  Alat,
  TimTim,
  Tim,
  GambarTim,
  NamaTim,
  Tautan,
  KelompokTombol,
  Tombol,
} from "../styles/DetailProyek.styled";

const DetailProyek = ({ bukaModal, aturBukaModal }) => {
  const proyek = bukaModal?.project;
  return (
    <Modal
      open={bukaModal.state}
      onClose={() => aturBukaModal({ state: false, project: null })}
    >
      <Wadah>
        <Pembungkus>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => aturBukaModal({ state: false, project: null })}
          />
          <Gambar src={proyek?.gambar} />
          <Judul>{proyek?.judul}</Judul>
          <Tanggal>{proyek?.tanggal}</Tanggal>
          <Peralatan>
            {proyek?.peralatan.map((peralatan) => (
              <Alat>{peralatan}</Alat>
            ))}
          </Peralatan>
          <Deskripsi>{proyek?.deskripsi}</Deskripsi>
          {proyek.tim && (
            <>
              <Label>Tim</Label>
              <TimTim>
                {proyek?.tim.map((tim) => (
                  <Tim>
                    <GambarTim src={tim.gambar} />
                    <NamaTim>{tim.nama}</NamaTim>
                    <Tautan
                      href={tim.github}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <GitHub />
                    </Tautan>
                  </Tim>
                ))}
              </TimTim>
            </>
          )}
          <KelompokTombol>
            <Tombol dull href={proyek?.github} target="new">
              Lihat Kode
            </Tombol>
          </KelompokTombol>
        </Pembungkus>
      </Wadah>
    </Modal>
  );
};

export default DetailProyek;
