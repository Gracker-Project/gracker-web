import React from "react";
import { CircularBackground, CircularProgress } from "./CircularProgressBar.style";

interface CircularSVGProps {
  progress: number;
}

const CircularSVG: React.FC<CircularSVGProps> = ({ progress }) => {
  return (
    <svg width="120" height="120">
      <CircularBackground cx="60" cy="60" r="55" />
      <CircularProgress cx="60" cy="60" r="55" progress={progress} />
    </svg>
  );
};

export default CircularSVG;