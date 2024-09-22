import styled from "@emotion/styled";

export const TipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #ffffff;
`;

export const Greeting = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #333333;
  text-align: left;
  margin-top: 20px;
`;

export const UserInfo = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #777777;
  margin-top: 10px;
  text-align: left;
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
`;

export const TipsList = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;