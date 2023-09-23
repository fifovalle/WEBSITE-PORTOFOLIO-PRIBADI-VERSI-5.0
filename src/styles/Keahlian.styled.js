// FILE STYLED COMPONENTS
import styled from "styled-components";
// FILE FRAMER-MOTION
import { motion } from "framer-motion";

export const Wadah = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

export const Pembungkus = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

export const Judul = styled(motion.div)`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.teks_primer};
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Deskripsi = styled(motion.div)`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.teks_sekunder};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const WadahKeahlian = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 40px;
`;

export const KeahlianKeahlian = styled.div`
  width: 100%;
  max-width: 500px;
  background: transparent;
  border: 0.5px solid ${({ theme }) => theme.warna_hover};
  border-radius: 16px;
  padding: 18px 36px;
  &:hover {
    cursor: pointer;
    scale: 1.1;
    box-shadow: 0px 1.42184px 21.23px rgba(255, 86, 246, 0.51);
  }
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media screen and (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

export const JudulKeahlian = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.putih};
  margin: 18px 0;
  text-align: center;
`;

export const DaftarKeahlian = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

export const KeahlianSaya = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.teks_sekunder};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.warna_hover};
  padding: 12px 16px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export const GambarKeahlian = styled.img`
  width: 24px;
  height: 24px;
`;
