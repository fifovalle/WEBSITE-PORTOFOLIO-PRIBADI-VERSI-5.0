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

export const KelompokTombol = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.warna_hover};
  color: ${({ theme }) => theme.teks_primer};
  font-size: 16px;
  border-radius: 4px;
  font-weight: 500;
  margin: 22px 0;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 8px;
  }
  @media screen and (max-width: 350px) {
    font-size: 6px;
  }
`;

export const TombolBeralih = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  ${({ aktif, theme }) => aktif && `background-color: ${theme.warna_hover};`}
  &:hover {
    background-color: ${({ theme }) => theme.warna_hover};
  }
  @media screen and (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

export const Pembagi = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.warna_hover};
`;

export const WadahKartu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
`;
