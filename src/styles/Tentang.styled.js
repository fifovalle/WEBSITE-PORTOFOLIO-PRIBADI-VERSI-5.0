// FILE STYLED COMPONENTS
import styled from "styled-components";
// FILE FRAMER-MOTION
import { motion } from "framer-motion";

export const WadahTentang = styled.div`
  background-color: ${({ theme }) => theme.latar};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }
`;

export const LatarTentang = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  bottom: 0;
  right: 0;
  left: 680px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  @media screen and (max-width: 1491px) {
    top: 50%;
    bottom: 0;
    right: 0;
    left: 46%;
  }
  @media screen and (max-width: 960px) {
    padding: 0 0px;
    justify-content: center;
    top: 50%;
    bottom: 0;
    right: 0;
    left: 50%;
  }
  @media screen and (max-width: 768px) {
    padding: 0 0px;
    justify-content: center;
    top: 45%;
    bottom: 0;
    right: 0;
    left: 50%;
    width: 80%;
    height: 100%;
  }
  @media screen and (max-width: 400px) {
    top: 50%;
  }
`;

export const IsiTentang = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const TentangBagianKiri = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const TentangBagianKanan = styled(motion.div)`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
  }
`;

export const Judul = styled(motion.div)`
  font-size: 60px;
  font-weight: 800;
  color: ${({ theme }) => theme.teks_primer};
  line-height: 68px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TeksBerulang = styled(motion.div)`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.teks_primer};
  line-height: 60px;
  gap: 12px;
  display: flex;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Bungkus = styled.span`
  font-weight: 800;
  color: ${({ theme }) => theme.warna_hover};
`;

export const Deskripsi = styled(motion.div)`
  font-size: 18px;
  text-align: justify;
  color: ${({ theme }) => theme.teks_primer + 95};
  line-height: 25px;
  margin-bottom: 42px;
  @media screen and (max-width: 960px) {
    text-align: justify;
  }
  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

export const TombolRingkasan = styled(motion.a)`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.putih};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  margin-top: -30px;
  transition: all 0.2s ease-in-out !important;
  background: linear-gradient(
    92.23deg,
    #ff56f6 21.43%,
    #b936ee 50.63%,
    #3bace2 100%,
    #406aff 117.04%
  );
  background: -moz-linear-gradient(
    92.23deg,
    #ff56f6 21.43%,
    #b936ee 50.63%,
    #3bace2 100%,
    #406aff 117.04%
  );
  background: -webkit-linear-gradient(
    92.23deg,
    #ff56f6 21.43%,
    #b936ee 50.63%,
    #3bace2 100%,
    #406aff 117.04%
  );
  :hover {
    background: linear-gradient(
      92.23deg,
      #406aff 21.43%,
      #3bace2 50.63%,
      #b936ee 100%,
      #ff56f6 117.04%
    );
    color: ${({ theme }) => theme.putih};
    cursor: pointer;
    transform: scale(1.05);
  }
  transition: all 0.4s ease-in-out;
  filter: brightness(1);
  @media screen and (max-width: 640px) {
    margin-top: -25px;
    padding: 12px 0;
    font-size: 18px;
  }
`;

export const Foto = styled(motion.img)`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  max-width: 400px;
  max-height: 400px;
  object-fit: cover;
  object-position: center;
  @media screen and (max-width: 768px) {
    max-width: 300px;
    max-height: 400px;
  }
  @media screen and (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Partikel = styled(motion.img)`
  position: absolute;
  width: 160px;
  height: 160px;
  bottom: 20px;
  @media screen and (max-width: 960px) {
    bottom: 450px;
    left: 200px;
  }
  @media screen and (max-width: 768px) {
    bottom: 500px;
    left: 100px;
  }
  @media screen and (max-width: 640px) {
    bottom: 400px;
    left: 50px;
    width: 130px;
    height: 130px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const Partikel2 = styled(motion.img)`
  position: absolute;
  width: 160px;
  height: 160px;
  top: -20px;
  right: 200px;
  @media screen and (max-width: 960px) {
    bottom: 450px;
    left: 200px;
  }
  @media screen and (max-width: 768px) {
    bottom: 700px;
    left: 150px;
  }
  @media screen and (max-width: 640px) {
    bottom: 700px;
    left: 100px;
    width: 130px;
    height: 130px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Partikel3 = styled(motion.img)`
  position: absolute;
  width: 160px;
  height: 160px;
  top: 170px;
  left: 880px;
  @media screen and (max-width: 960px) {
    bottom: 650px;
    left: 700px;
  }
  @media screen and (max-width: 768px) {
    bottom: 700px;
    left: 550px;
  }
  @media screen and (max-width: 640px) {
    bottom: 700px;
    left: 500px;
    width: 130px;
    height: 130px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
