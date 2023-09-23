// FILE STYLED COMPONENTS
import styled from "styled-components";

export const Kartu = styled.div`
  width: 330px;
  height: 490px;
  background: transparent;
  border: 0.5px solid ${({ theme }) => theme.warna_hover};
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 1.42184px 21.23px rgba(255, 86, 246, 0.51);
    filter: brightness(1.1);
  }
`;

export const Gambar = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.putih};
  border-radius: 10px;
  object-fit: cover;
`;

export const Peralatan = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  align-items: center;
`;

export const Alat = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.putih};
  background-color: ${({ theme }) => theme.warna_hover};
  padding: 2px 8px;
  border-radius: 10px;
`;

export const Selengkapnya = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 2px;
`;

export const Judul = styled.a`
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.teks_primer};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Tanggal = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-left: 2px;
  color: ${({ theme }) => theme.teks_sekunder + 80};
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Deskripsi = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.teks_sekunder + 99};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  margin-top: 8px;
  max-width: 100%;
`;

export const Tim = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const Foto = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.putih};
  box-shadow: 0px 1.42184px 21.23px rgba(255, 86, 246, 0.51);
  border: 0.5px solid ${({ theme }) => theme.warna_hover};
`;
