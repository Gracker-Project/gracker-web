import React from "react";
import { MainFormContainerStyled, SectionTitleBoxStyled } from "./FormBox.style";

interface MainFormContainerProps {
  title: string;
  children: React.ReactNode;
}

const MainFormContainer: React.FC<MainFormContainerProps> = ({ title, children }) => {
  return (
    <MainFormContainerStyled>
      <SectionTitleBoxStyled>{title}</SectionTitleBoxStyled>
      {children}
    </MainFormContainerStyled>
  );
};

export default MainFormContainer;