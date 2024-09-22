import React from "react";
import {
  TipContainer,
  Greeting,
  UserInfo,
  Logo,
  TextContainer,
  TipsList
} from "./Tip.style";
import logo from "@/assets/logo_black.svg";
import MainFormContainer from "@/components/common/form/FormBox";
import AccordionItem from "@/components/common/form/Accordion";

const Tip: React.FC = () => {
  const userName = "이상민";
  const department = "경북대학교 컴퓨터학부 심화컴퓨터전공 23학번";

  // Sample tips data
  const tips = [
    {
      title: "시간 관리",
      content: "과목별로 시간을 적절히 배분하여 학습 계획을 세우세요.",
      number: 1,
    },
    {
      title: "과제 제출",
      content: "과제는 마감일을 미리 확인하고 제출하세요.",
      number: 2,
    },
    {
      title: "스터디 그룹",
      content: "스터디 그룹을 만들어 서로 도움을 주고받으세요.",
      number: 3,
    },
  ];

  return (
    <TipContainer>
      <Logo src={logo} alt="Logo" />

      <TextContainer>
        <Greeting>안녕하세요, {userName}님</Greeting>
        <UserInfo>{department}</UserInfo>
      </TextContainer>

      <MainFormContainer title="선배들의 팁">
        <TipsList>
          {tips.map((tip) => (
            <AccordionItem
              key={tip.number}
              title={tip.title}
              content={tip.content}
              number={tip.number}
            />
          ))}
        </TipsList>
      </MainFormContainer>
    </TipContainer>
  );
};

export default Tip;