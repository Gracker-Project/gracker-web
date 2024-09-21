import React from "react";
import { HomeContainer, Greeting, UserInfo, Logo } from "./Home.style";
import logo from "@/assets/logo_black.svg";

const Home: React.FC = () => {
  const userName = "이상민";
  const department = "경북대학교 컴퓨터학부 심화컴퓨터전공 23학번";

  return (
    <HomeContainer>
      <Logo src={logo} alt="Logo" />
      <Greeting>안녕하세요, {userName}님</Greeting>
      <UserInfo>{department}</UserInfo>
      
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>
      <h1>홈 화면</h1>

    </HomeContainer>
  );
};

export default Home;