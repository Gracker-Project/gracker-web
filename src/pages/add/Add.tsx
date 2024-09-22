import React, { useState } from "react";
import {
  AddContainer,
  Greeting,
  UserInfo,
  Logo,
  TextContainer,
  SectionTitleBox,
  FormSection,
  UploadContainer,
  UploadButton,
  HiddenFileInput,
  FileName,
  CourseForm,
  FormField,
  FieldLabel,
  InputField,
  CreditsControl,
  CreditsButton,
  CreditsDisplay,
  GradeSelect,
  AddButton,
} from "./Add.style";
import logo from "@/assets/logo_black.svg";
import MainFormContainer from "@/components/common/form/FormBox";

const Add: React.FC = () => {
  const userName = "이상민";
  const department = "경북대학교 컴퓨터학부 심화컴퓨터전공 23학번";

  // 파일 업로드 상태
  const [gradeCertFile, setGradeCertFile] = useState<File | null>(null);
  const [englishCertFile, setEnglishCertFile] = useState<File | null>(null);

  // 과목 추가 상태
  const [subjectName, setSubjectName] = useState("");
  const [credits, setCredits] = useState(0);
  const [grade, setGrade] = useState("");

  // 파일 업로드 핸들러
  const handleGradeCertUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setGradeCertFile(e.target.files[0]);
    }
  };

  const handleEnglishCertUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setEnglishCertFile(e.target.files[0]);
    }
  };

  // 과목 추가 핸들러
  const handleAddCourse = () => {
    // 실제 과목 추가 로직을 여기에 구현하세요
    console.log({ subjectName, credits, grade });
    // 입력 필드 초기화
    setSubjectName("");
    setCredits(0);
    setGrade("");
  };

  return (
    <AddContainer>
      <Logo src={logo} alt="Logo" />

      <TextContainer>
        <Greeting>안녕하세요, {userName}님</Greeting>
        <UserInfo>{department}</UserInfo>
      </TextContainer>

      {/* 증명서 업로드 섹션 */}
      <SectionTitleBox>증명서 업로드</SectionTitleBox>

      <FormSection>
        {/* 성적 증명서 업로드 */}
        <MainFormContainer title="성적 증명서 업로드">
          <UploadContainer>
            <span>파일을 선택하세요.</span>
            <HiddenFileInput
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleGradeCertUpload}
              id="grade-cert-upload"
            />
            <UploadButton htmlFor="grade-cert-upload">업로드</UploadButton>
            {gradeCertFile && <FileName>{gradeCertFile.name}</FileName>}
          </UploadContainer>
        </MainFormContainer>

        {/* 공인 영어 성적 업로드 */}
        <MainFormContainer title="공인 영어 성적 업로드">
          <UploadContainer>
            <span>파일을 선택하세요.</span>
            <HiddenFileInput
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleEnglishCertUpload}
              id="english-cert-upload"
            />
            <UploadButton htmlFor="english-cert-upload">업로드</UploadButton>
            {englishCertFile && <FileName>{englishCertFile.name}</FileName>}
          </UploadContainer>
        </MainFormContainer>
      </FormSection>

      {/* 과목 직접 추가 섹션 */}
      <SectionTitleBox>과목 직접 추가</SectionTitleBox>

      <FormSection>
        <MainFormContainer title="수강 과목 추가하기">
          <CourseForm>
            {/* 과목명 입력 */}
            <FormField>
              <FieldLabel>과목명</FieldLabel>
              <InputField
                type="text"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
                placeholder="과목명을 입력하세요."
              />
            </FormField>

            {/* 학점 조절 */}
            <FormField>
              <FieldLabel>학점</FieldLabel>
              <CreditsControl>
                <CreditsButton
                  type="button"
                  onClick={() => setCredits((prev) => Math.max(prev - 1, 0))}
                >
                  -
                </CreditsButton>
                <CreditsDisplay>{credits}</CreditsDisplay>
                <CreditsButton
                  type="button"
                  onClick={() => setCredits((prev) => prev + 1)}
                >
                  +
                </CreditsButton>
              </CreditsControl>
            </FormField>

            {/* 성적 선택 */}
            <FormField>
              <FieldLabel>성적</FieldLabel>
              <GradeSelect
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                required
              >
                <option value="" disabled>
                  성적을 선택하세요
                </option>
                <option value="A+">A+</option>
                <option value="A0">A0</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B0">B0</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C0">C0</option>
                <option value="C-">C-</option>
                <option value="D+">D+</option>
                <option value="D0">D0</option>
                <option value="D-">D-</option>
                <option value="F">F</option>
              </GradeSelect>
            </FormField>

            {/* 추가하기 버튼 */}
            <AddButton onClick={handleAddCourse}>추가하기</AddButton>
          </CourseForm>
        </MainFormContainer>
      </FormSection>
    </AddContainer>
  );
};

export default Add;