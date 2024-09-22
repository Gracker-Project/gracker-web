import React from "react";
import {
  HomeContainer,
  Greeting,
  UserInfo,
  Logo,
  TextContainer,
  ProgressContainer
} from "./Home.style";
import logo from "@/assets/logo_black.svg";
import CircularProgressBar from "@/components/common/progress/CircularProgressBar";
import MainFormContainer from "@/components/common/form/FormBox";
import GraduationStatusTable from "@/components/home/GraduationStatusTable";

const Home: React.FC = () => {
  const userName = "이상민";
  const department = "경북대학교 컴퓨터학부 심화컴퓨터전공 23학번";

  const currentCredits = 56;
  const maxCredits = 150;

  // Sample data for GraduationStatusTable
  const graduationData = [
    { semester: "전체 평점", liberalCredits: 4.12, majorCredits: 4.37 },
    { semester: "전공 평점", liberalCredits: 4.17, majorCredits: 4.40 },
    { semester: "교양 평점", liberalCredits: 4.11, majorCredits: 4.34 },
  ];

  return (
    <HomeContainer>
      <Logo src={logo} alt="Logo" />

      <TextContainer>
        <Greeting>안녕하세요, {userName}님</Greeting>
        <UserInfo>{department}</UserInfo>
      </TextContainer>

      {/* 학점 현황 Section */}
      <MainFormContainer title="학점 현황">
        <ProgressContainer>
          <CircularProgressBar
            currentValue={currentCredits}
            maxValue={maxCredits}
          />
          <CircularProgressBar
            currentValue={currentCredits}
            maxValue={maxCredits}
          />
        </ProgressContainer>
      </MainFormContainer>

      {/* 졸업현황 Section */}
      <MainFormContainer title="평점현황">
        <GraduationStatusTable data={graduationData} />
      </MainFormContainer>

      {/* 추천과목 Section */}
      <MainFormContainer title="추천과목">
        <p>추천과목.</p>
      </MainFormContainer>
    </HomeContainer>
  );
};

export default Home;