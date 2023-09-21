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
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
