import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
`;

export const Greeting = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
  color: #333333;
`;

export const UserInfo = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #777777;
  margin-top: 10px;
  text-align: center;
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
`;