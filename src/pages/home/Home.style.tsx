import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh; // Ensures it takes full viewport height
  box-sizing: border-box;
  background-color: #ffffff; // Optional: set a background color
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Left alignment
  width: 100%;
  max-width: 800px; // Match MainFormContainer's max-width
  margin-top: 20px;
`;

export const Greeting = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #333333;
  text-align: left;
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

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; // Center alignment
  width: 100%;
  max-width: 600px; // Optional: limit the width
  margin-top: 30px;
  gap: 20px;
`;