import styled from "@emotion/styled";

// 기존 스타일들
export const AddContainer = styled.div`
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

export const SectionTitleBox = styled.div`
  background-color: #9a2828;
  border-radius: 10px;
  padding: 10px 15px;
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
`;

export const FormSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 10px;
`;

// 새로운 스타일 컴포넌트들

// 파일 업로드 섹션
export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export const UploadButton = styled.label`
  padding: 10px 20px;
  background-color: #9a2828;
  color: #ffffff;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a1f1f;
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const FileName = styled.span`
  font-size: 14px;
  color: #333333;
`;

// 과목 추가 섹션
export const CourseForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldLabel = styled.span`
  font-size: 14px;
  color: #5c5c5c;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px 20px;
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid #e8e8e8;

  &:focus {
    outline: 2px solid #9a2828;
  }
`;

export const CreditsControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CreditsButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6e6e6;
  }

  &:active {
    background-color: #d4d4d4;
  }
`;

export const CreditsDisplay = styled.span`
  font-size: 16px;
  color: #333333;
`;

export const GradeSelect = styled.select`
  width: 100%;
  height: 40px;
  padding: 5px 20px;
  font-size: 15px;
  color: ${(props: { value: string }) => (props.value === "" ? "#5c5c5c" : "#000")};
  border-radius: 10px;
  border: 1px solid #e8e8e8;
  background-color: #fff;
  appearance: none;

  &:focus {
    outline: 2px solid #9a2828;
  }
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #9a2828;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #7a1f1f;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #5a1616;
    transform: translateY(0);
  }
`;