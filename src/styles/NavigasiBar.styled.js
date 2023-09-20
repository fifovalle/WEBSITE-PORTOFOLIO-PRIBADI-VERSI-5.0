// FILE STYLED COMPONENTS
import styled, { keyframes as kuncifrem } from "styled-components";
// FILE REACT
import { Link as TautanNavigasi } from "react-router-dom";

const muncul = kuncifrem`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const hilang = kuncifrem`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Navigasi = styled.div`
  background-color: ${({ theme }) => theme.latar};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    transition: 0.8s all ease;
  }
`;

export const WadahNavigasi = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  @media screen and (max-width: 938px) {
    transition: 0.8s all ease;
    padding: 0 5px;
    transition: 0.8s all ease;
  }
  @media screen and (max-width: 640px) {
    transition: 0.8s all ease;
    padding: 0 24px;
    transition: 0.8s all ease;
  }
`;

export const LogoNavigasi = styled(TautanNavigasi)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  @media screen and (max-width: 938px) {
    transition: 0.8s all ease;
    padding: 0 1px;
  }
  @media screen and (max-width: 640px) {
    transition: 0.8s all ease;
    padding: 0 0px;
  }
`;

export const MenuNavigasi = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 938px) {
    transition: 0.8s all ease;
    font-size: 15px;
  }
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    display: none;
  }
`;

export const Tautan = styled.a`
  color: ${({ theme }) => theme.teks_primer};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.warna_hover};
  }
`;

export const WadahTombol = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    display: none;
  }
`;

export const TombolGithub = styled.button`
  border: 1.8px solid ${({ theme }) => theme.primer};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  color: ${({ theme }) => theme.putih};
  background: linear-gradient(
    92.23deg,
    #ff56f6 21.43%,
    #b936ee 50.63%,
    #3bace2 100%,
    #406aff 117.04%
  );
  box-shadow: 0px 4.42184px 107.23px rgba(255, 86, 246, 0.51);
  :hover {
    background: linear-gradient(
      92.23deg,
      #406aff 21.43%,
      #3bace2 50.63%,
      #b936ee 100%,
      #ff56f6 117.04%
    );
    color: ${({ theme }) => theme.putih};
  }
  @media screen and (max-width: 938px) {
    transition: 0.8s all ease;
    font-size: 15px;
  }
  @media screen and (max-width: 640px) {
    transition: 0.8s all ease;
    font-size: 0.8rem;
  }
`;

export const Teks = styled.div`
  padding: 0px 4px;
  font-weight: bold;
  font-size: 20px;
  margin-left: -19px;
  margin-top: 30px;
  color: rgba(255, 86, 246, 1);
  @media screen and (max-width: 938px) {
    transition: 0.8s all ease;
    font-size: 15px;
  }
  @media screen and (max-width: 815px) {
    transition: 0.8s all ease;
    font-size: 10px;
  }
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    font-size: 20px;
  }
`;

export const IkonUntukHP = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.teks_primer};
    padding: 10px 5px;
  }
`;

export const DartarMenuUntukHp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: linear-gradient(
    92.23deg,
    rgba(255, 86, 246, 0) 21.43%,
    rgba(185, 54, 238, 0.3) 50.63%,
    rgba(59, 172, 226, 0.4) 100%,
    rgba(64, 106, 255, 0.5) 117.04%
  );
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ buka }) => (buka ? "1" : "0")};
  z-index: ${({ buka }) => (buka ? "1" : "-1")};
  animation: ${({ buka }) => (buka ? muncul : hilang)} 0.5s ease-in-out;
`;

export const DaftarTautanMenuUntukHp = styled(Tautan)`
  color: ${({ theme }) => theme.putih};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.warna_hover};
  }
`;
