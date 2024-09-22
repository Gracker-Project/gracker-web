import styled from "@emotion/styled";

export const ReportsContainer = styled.div`
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

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const CourseList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const CourseItem = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  color: #333333;
`;