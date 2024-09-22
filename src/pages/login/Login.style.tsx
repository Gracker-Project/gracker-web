import styled from "@emotion/styled";
import { place_center } from "@/styles/utils";

export const LoginPageLayout = styled.main`
  ${place_center};
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 20px;
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
`;

export const ButtonWrapper = styled.div<{ visible: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;