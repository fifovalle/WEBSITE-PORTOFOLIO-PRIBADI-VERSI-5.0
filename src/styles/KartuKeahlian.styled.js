// FILE STYLED COMPONENTS
import styled from "styled-components";

export const Dokumen = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #306ee8;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Kartu = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 1.42184px 21.23px rgba(255, 86, 246, 0.51);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover ${Dokumen} {
    display: flex;
  }
  &:hover {
    box-shadow: 0px 1.42184px 21.23px rgba(255, 86, 246, 0.51);
    transform: translateY(-5px);
  }
  @media screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 350px;
  }
  @media screen and (max-width: 640px) {
    padding: 10px;
    gap: 8px;
    width: 320px;
  }
  @media screen and (max-width: 400px) {
    padding: 10px;
    gap: 8px;
    width: 250px;
  }
  @media screen and (max-width: 350px) {
    padding: 10px;
    gap: 8px;
    width: 230px;
    margin-right: 20px;
  }
  border: 0.1px solid #ff56f6;
  box-shadow: rgba(23, 92, 230, 0.15) 0 4px 24px;
`;

export const Atas = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

export const Logo = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;

export const Konten = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Peran = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.teks_primer + 99};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Perusahaan = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.teks_sekunder + 99};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Waktu = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.teks_sekunder + 80};
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Deskripsi = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.teks_primer + 99};
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const KeahlianSaya = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  margin-top: 10px;
`;

export const Daftar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const DaftarKeahlian = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.teks_primer + 99};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
