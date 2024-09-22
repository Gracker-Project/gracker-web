import styled from "@emotion/styled";

export const MoreContainer = styled.div`
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

export const SettingsList = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #f9f9f9;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const SettingText = styled.span`
  font-size: 16px;
  color: #333333;
`;

export const LogoutButton = styled.button`
  width: 100%;
  padding: 10px 30px;
  border-radius: 20px;

  font-size: 20px;
  font-weight: 600;
  color: #fff;

  background-color: #9a2828;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;