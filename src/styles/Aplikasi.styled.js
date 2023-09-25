// FILE STYLED COMPONENTS
import styled from "styled-components";

export const Badan = styled.div`
  background-color: ${({ theme }) => theme.latar};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

export const Pembungkus = styled.div`
  width: 100%;
`;

export const WadahMemuat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
