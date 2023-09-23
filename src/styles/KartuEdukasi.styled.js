// FILE STYLED COMPONENTS
import styled from "styled-components";

export const Dokumen = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Deskripsi = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.teks_primer + 99};
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Bungkus = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
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
  &:hover ${Bungkus} {
    overflow: visible;
    -webkit-line-clamp: unset;
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
  width: 100%;
  display: flex;
  gap: 12px;
`;

export const Gambar = styled.img`
  height: 50px;
  background-color: transparent;
  border-radius: 10px;
  margin-top: 4px;
  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;

export const Konten = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Nama = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.teks_primer + 99};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Jurusan = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.teks_sekunder + 99};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Lama = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.teks_sekunder + 80};
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Nilai = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.teks_sekunder + 99};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
