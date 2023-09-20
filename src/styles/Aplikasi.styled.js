// FILE STYLED COMPONENTS
import styled from "styled-components";

export const Badan = styled.div`
  background-color: ${({ theme }) => theme.latar};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

export const Pembungkus = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(141.27deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
