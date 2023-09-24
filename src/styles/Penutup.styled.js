// FILE STYLED COMPONENTS
import styled from "styled-components";

export const Wadah = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

export const Pembungkus = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
`;

export const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.putih};
`;

export const Navigasi = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

export const TautanTautanNavigasi = styled.a`
  color: ${({ theme }) => theme.teks_primer};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.warna_hover};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const IkonSosialMedia = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const Ikon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.teks_primer};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.warna_hover};
  }
`;

export const HakCipta = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.putih};
  text-align: center;
`;
