import React from "react";
import {
  MoreContainer,
  Greeting,
  UserInfo,
  Logo,
  TextContainer,
  SettingsList,
  SettingItem,
  SettingText,
  LogoutButton,
} from "./More.style";
import logo from "@/assets/logo_black.svg";
import MainFormContainer from "@/components/common/form/FormBox";

const More: React.FC = () => {
  const userName = "이상민";
  const department = "경북대학교 컴퓨터학부 심화컴퓨터전공 23학번";

  const handleLogout = () => {
    // Handle logout logic
    console.log("로그아웃");
    // 예: 인증 상태 초기화, 리디렉션 등
  };

  const handleLanguageChange = () => {
    // Handle language change
    console.log("언어 설정 변경");
    // 예: 다국어 지원 로직 추가
  };

  return (
    <MoreContainer>
      <Logo src={logo} alt="Logo" />

      <TextContainer>
        <Greeting>안녕하세요, {userName}님</Greeting>
        <UserInfo>{department}</UserInfo>
      </TextContainer>

      <MainFormContainer title="설정">
        <SettingsList>
          <SettingItem onClick={handleLanguageChange}>
            <SettingText>언어 설정</SettingText>
            {/* 설정 아이콘 추가 가능 */}
          </SettingItem>

          {/* 추가적인 설정 항목을 여기에 추가 */}
        </SettingsList>
      </MainFormContainer>

      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </MoreContainer>
  );
};

export default More;