import styled from "@emotion/styled";
import { place_center } from "@/styles/utils";

export const LoginPageLayout = styled.main`
  ${place_center};
  width: 100%;
  min-height: 100%;
  background-color: #ffffff;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;