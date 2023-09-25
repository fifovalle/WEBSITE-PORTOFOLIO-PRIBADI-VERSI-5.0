// FILE STYLED COMPONENTS
import styled from "styled-components";

export const Wadah = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

export const Pembungkus = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background: linear-gradient(
    92.23deg,
    rgba(255, 86, 246, 0.6) 21.43%,
    rgba(185, 54, 238, 0.6) 50.63%,
    rgba(59, 172, 226, 0.6) 100%,
    rgba(64, 106, 255, 0.6) 117.04%
  );
  color: ${({ theme }) => theme.teks_primer};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Judul = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.teks_primer};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0 6px;
  }
`;

export const Tanggal = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.teks_sekunder};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Deskripsi = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.teks_primer};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

export const Gambar = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 4.42184px 107.23px rgba(255, 86, 246, 0.51);
`;

export const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.teks_primer};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`;

export const Peralatan = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`;

export const Alat = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.teks_primer};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.warna_hover};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const TimTim = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`;

export const Tim = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const GambarTim = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

export const NamaTim = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({ theme }) => theme.teks_primer};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Tautan = styled.a`
  color: ${({ theme }) => theme.teks_primer};
  & :hover {
    color: ${({ theme }) => theme.warna_hover};
  }
`;

export const KelompokTombol = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

export const Tombol = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.teks_primer};
  padding: 12px 16px;
  border-radius: 8px;
  background: linear-gradient(
    92.23deg,
    rgba(255, 86, 246, 0.7) 21.43%,
    rgba(185, 54, 238, 0.7) 50.63%,
    rgba(59, 172, 226, 0.7) 100%,
    rgba(64, 106, 255, 0.7) 117.04%
  );
  ${({ dull, theme }) =>
    dull &&
    `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.latar + 99};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background: linear-gradient(
      92.23deg,
      rgba(64, 106, 255, 0.7) 21.43%,
      rgba(59, 172, 226, 0.7) 50.63%,
      rgba(185, 54, 238, 0.7) 100%,
      rgba(255, 86, 246, 0.7) 117.04%
    );
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
