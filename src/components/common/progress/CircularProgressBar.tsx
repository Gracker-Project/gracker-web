// CircularProgressBar.tsx
import React from "react";
import {
  ProgressBarContainer,
  ProgressText,
  ProgressValueText,
  ProgressTitleText,
} from "./CircularProgressBar.style";
import CircularSVG from "./CircularSVG";

interface CircularProgressBarProps {
  currentValue: number;
  maxValue: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  currentValue,
  maxValue,
}) => {
  const progress = (currentValue / maxValue) * 100;

  return (
    <ProgressBarContainer>
      <CircularSVG progress={progress} />
      <ProgressText>
        <ProgressValueText>
          {currentValue} / {maxValue}
        </ProgressValueText>
        <ProgressTitleText>현재 이수 학점 /</ProgressTitleText>
        <ProgressTitleText>최소 이수 학점</ProgressTitleText>
      </ProgressText>
    </ProgressBarContainer>
  );
};

export default CircularProgressBar;