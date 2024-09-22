import React from "react";
import {
  ReportsContainer,
  Greeting,
  UserInfo,
  Logo,
  TextContainer,
  ImageContainer,
  CourseList,
  CourseItem
} from "./Reports.style";
import logo from "@/assets/logo_black.svg";
import curriculumImage from "@/assets/curriculum.png"; // 실제 커리큘럼 이미지 경로로 변경 필요
import MainFormContainer from "@/components/common/form/FormBox";

const Reports: React.FC = () => {
  const userName = "이상민";
  const department = "경북대학교 컴퓨터학부 심화컴퓨터전공 23학번";

  // Sample data for course list
  const courseList = [
    "자료구조",
    "운영체제",
    "네트워크",
    "데이터베이스",
    "인공지능",
  ];

  return (
    <ReportsContainer>
      <Logo src={logo} alt="Logo" />

      <TextContainer>
        <Greeting>{userName} 님의 분석 결과 입니다.</Greeting>
        <UserInfo>{department}</UserInfo>
      </TextContainer>

      {/* 학교 커리큘럼 Section */}
      <MainFormContainer title="학교 커리큘럼">
        <ImageContainer>
          <img src={curriculumImage} alt="학교 커리큘럼" style={{ maxWidth: "100%", height: "auto" }} />
        </ImageContainer>
      </MainFormContainer>

      {/* 선수 후수 과목 Section */}
      <MainFormContainer title="선수 후수 과목">
        <CourseList>
          {courseList.map((course, index) => (
            <CourseItem key={index}>{course}</CourseItem>
          ))}
        </CourseList>
      </MainFormContainer>
    </ReportsContainer>
  );
};

export default Reports;