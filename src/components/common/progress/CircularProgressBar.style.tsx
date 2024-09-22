import styled from "@emotion/styled";

export const ProgressBarContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircularBackground = styled.circle`
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 7;
`;

export const CircularProgress = styled.circle<{ progress: number }>`
  fill: none;
  stroke: #9a2828;
  stroke-width: 7;
  stroke-linecap: round;
  stroke-dasharray: 345;  // 반지름에 맞춰 조정
  stroke-dashoffset: ${({ progress }) => 345 - (345 * progress) / 100};
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dashoffset 0.5s ease-in-out;
`;

export const ProgressText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const ProgressValueText = styled.div`
  font-size: 15px; // 크기 조절
  font-weight: bold;
  color: #333333;
`;

export const ProgressTitleText = styled.div`
  font-size: 9px; // 크기 조절
  color: #777777;
  margin-top: 5px;
`;