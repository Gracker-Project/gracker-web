import styled from "@emotion/styled";
import { place_center } from "@/styles/utils";

export const SplashContainer = styled.div`
  ${place_center};
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  top: 0;
  left: 0;
  z-index: 1000;
  opacity: 1;
  transition: opacity 0.5s ease-out;
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
`;